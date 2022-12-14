import { FunctionComponent } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Dashboard from "../../components/Dashboard/Dashboard";
import DashboardError from "../../components/DashboardError/DashboardError";
import DashboardLoader from "../../components/DashboardLoader/DashboardLoader";
const { REACT_APP_API_URL } = process.env;
const token = localStorage.getItem("token");
const families = JSON.parse(`${localStorage.getItem("families")}`);

const fetchBills = async () => {

  try {
    const res = await axios({
      method: "get",
      url: `${REACT_APP_API_URL}bills?family=${families}`,
      headers: {
        Authorization: "Bearer " + token,
      },
    });

    return res;
  } catch (err: any) {

    if (err.response.data.status === 401){
      localStorage.removeItem("name");
      localStorage.removeItem("token");
      localStorage.removeItem("families");
      window.location.reload()
    }
    throw new Error(err);
  }
};

const Home: FunctionComponent = () => {
  const { isLoading, isError, data, error } = useQuery(["bills"], fetchBills);

  const bills = data?.data?.data;

  if (isLoading) {
    return <DashboardLoader />;
  }

  if (isError) {
    return <DashboardError error={error} />;
  }

  return (
    <main>
      <Dashboard data={bills} />
    </main>
  );
};

export default Home;
