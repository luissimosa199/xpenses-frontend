import { FunctionComponent } from "react";
import { StyledHeader } from "./Header.styled";
import LogoutIcon from "@mui/icons-material/Logout";
import IconButton from "../containers/IconButton";
import { useNavigate } from "react-router-dom";

const Header: FunctionComponent = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("name");
    localStorage.removeItem("token");
    navigate("/login", { replace: true });
  };

  return (
    <StyledHeader>
      <h1>XPenses</h1>

      {/* add chained valitadation: if logged show nav... */}
      <nav>
        <ul>
          <li>Family</li>
          <li>Details</li>
          <li>History</li>
        </ul>
      </nav>

      <IconButton onClick={handleLogout}>
        <LogoutIcon />
      </IconButton>
    </StyledHeader>
  );
};

export default Header;
