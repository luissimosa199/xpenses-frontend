import { FunctionComponent } from "react";
import { StyledDashboardError } from "./DashboardError.styled";

interface DashnoardErrorProps {
  error: unknown;
}

const DashboardError: FunctionComponent<DashnoardErrorProps> = ({ error }) => {
  return (
    <StyledDashboardError>
      <h2>Ha ocurrido un error</h2>
      {`${error}`.startsWith("Error: Family") && (
        <p>
          Tienes que registrar una familia para poder crear y visualizar
          facturas
        </p>
      )}
      <div>
        <h3>Error Code:</h3>
        <p>{`${error}`}</p>
      </div>
    </StyledDashboardError>
  );
};

export default DashboardError;
