import { FunctionComponent } from "react";
import { DataObject } from "../../interfaces/DataInterface";
import Card from "../Card/Card";
import DashboardLoader from "../DashboardLoader/DashboardLoader";
import { StyledCardList } from "./Dashboard.styled";

interface DashboardProps {
  data: DataObject[];
}

const Dashboard: FunctionComponent<DashboardProps> = ({ data }) => {

  const userData = JSON.parse(localStorage.getItem("userData") as string);

  if(userData.families.length === 0){
    return(
      <h1>No hay familia agregada</h1>
    )
  }

  if(data.length === 0){
    return(
      <h1>No hay notas agregadas</h1>
    )
  }


  return (
    <StyledCardList>
      {data ? (
        data.map((e) => (
          <Card key={e._id} info={e} />
        ))
      ) : (
        <DashboardLoader/>
      )}



    </StyledCardList>
  );
};

export default Dashboard;
