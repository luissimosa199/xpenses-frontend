import { FunctionComponent } from "react";
import { DataObject } from "../../interfaces/DataInterface";
import Card from "../Card/Card";
import { StyledCardList } from "./Dashboard.styled";

interface DashboardProps {
  data: DataObject[];
}

const Dashboard: FunctionComponent<DashboardProps> = ({ data }) => {
  return (
    <StyledCardList>
      {data ? (
        data.map((e) => (
          <Card key={e._id} info={e} />
        ))
      ) : (
        <p>Cargando...</p>
      )}
    </StyledCardList>
  );
};

export default Dashboard;
