import { FunctionComponent, useContext } from "react";
import { StyledDashboardError } from "./DashboardError.styled";
import { useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import IconButton from "../containers/IconButton";
import { UserContext } from "../../context/UserContext";

interface DashnoardErrorProps {
  error: unknown;
}

const DashboardError: FunctionComponent<DashnoardErrorProps> = ({ error }) => {
  const { handleLogout } = useContext(UserContext);
  const navigate = useNavigate();

  const handleExit = () => {
    localStorage.removeItem("name");
    localStorage.removeItem("token");
    localStorage.removeItem("families");
    localStorage.removeItem("userData");
    handleLogout();
    navigate("/login", { replace: true });
  };

  return (
    <StyledDashboardError>
      <h2>Ha ocurrido un error</h2>
      {`${error}`.startsWith("Error: Family") && (
        <p>
          Tienes que registrar una familia para poder crear y visualizar
          facturas
        </p>
      )}

      {`${error}`.startsWith("Error: User not authorize") && (
        <div>
          <p>
            Necesitamos validar tus credenciales, por favor deslogueate y vuelve
            a ingresar:
          </p>
          <IconButton onClick={handleExit}>
            <LogoutIcon />
          </IconButton>
        </div>
      )}

      <div>
        <h3>Error Code:</h3>
        <p>{`${error}`}</p>
      </div>
    </StyledDashboardError>
  );
};

export default DashboardError;
