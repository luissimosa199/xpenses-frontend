import { FunctionComponent } from "react";
import { StyledHeader } from "./Header.styled";
import LogoutIcon from "@mui/icons-material/Logout";
import IconButton from "../containers/IconButton";
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from "react-router-dom";
import { StyledLink } from "../containers/StyledLink";

const Header: FunctionComponent = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("name");
    localStorage.removeItem("token");
    navigate("/login", { replace: true });
  };

  const handleAddNewBill = () => {
    navigate("/addnewbill", { replace: true });
  }

  return (
    <StyledHeader>
      <h1>XPenses</h1>

      {/* add chained valitadation: if logged show nav... */}
      <nav>
        <ul>
          <StyledLink to="/family">Family</StyledLink>
          <StyledLink to="/details">Details</StyledLink>
          <StyledLink to="/history">History</StyledLink>
          <li className="btn-add">
            <IconButton onClick={handleAddNewBill}>
              <AddIcon/>
            </IconButton>
          </li>
        </ul>
      </nav>

      <div>
        <p>{localStorage.getItem("name")}</p>
        <IconButton onClick={handleLogout}>
          <LogoutIcon />
        </IconButton>
      </div>
    </StyledHeader>
  );
};

export default Header;
