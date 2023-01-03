import { FunctionComponent, useContext, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Dashboard from "../../components/Dashboard/Dashboard";
import DashboardError from "../../components/DashboardError/DashboardError";
import DashboardLoader from "../../components/DashboardLoader/DashboardLoader";
import { UserContext } from "../../context/UserContext";
const { REACT_APP_API_URL } = process.env;
const token = localStorage.getItem("token");
const families = JSON.parse(`${localStorage.getItem("families")}`);

const fetchBills = async () => {

  try {
    const res = await axios({
      method: "get",
      url: `${REACT_APP_API_URL}bills?family=${families[0]}`,
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    res.data.data.reverse()
    return res;
  } catch (err: any) {
    throw new Error(err);
  }
};

const Home: FunctionComponent = () => {
  const { isLoading, isError, data, error } = useQuery(["bills"], fetchBills);
  const { handleLogin } = useContext(UserContext);

  const bills = data?.data?.data;

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData") as string);
    handleLogin(userData);
  }, []);

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
