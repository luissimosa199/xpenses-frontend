import { FunctionComponent } from "react";
import { StyledHeader } from "./Header.styled";
import LogoutIcon from "@mui/icons-material/Logout";
import IconButton from "../containers/IconButton";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import { StyledLink } from "../containers/StyledLink";

const Header: FunctionComponent = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("name");
    localStorage.removeItem("token");
    localStorage.removeItem("families");
    navigate("/login", { replace: true });
  };

  const handleAddNewBill = () => {
    navigate("/addnewbill", { replace: true });
  };

  return (
    <StyledHeader>
      <StyledLink to='/'><h1>XPenses</h1></StyledLink>
      {/* add chained valitadation: if logged show nav... */}
      <nav>
        <ul>
          <li>
            <StyledLink to="/family/login">Family</StyledLink>
          </li>
          <li>
            <StyledLink to="/details">Details</StyledLink>
          </li>
          <li>
            <StyledLink to="/history">History</StyledLink>
          </li>
          <li className="btn-add">
            <IconButton onClick={handleAddNewBill}>
              <AddIcon />
            </IconButton>
          </li>
        </ul>
      </nav>

      <div className="flex-end">
        <p>{localStorage.getItem("name")}</p>
        <IconButton onClick={handleLogout}>
          <LogoutIcon />
        </IconButton>
      </div>
    </StyledHeader>
  );
};

export default Header;
