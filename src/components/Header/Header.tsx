import { FunctionComponent, useContext } from "react";
import { StyledHeader } from "./Header.styled";
import LogoutIcon from "@mui/icons-material/Logout";
import IconButton from "../containers/IconButton";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import { StyledLink } from "../containers/StyledLink";
import { UserContext } from "../../context/UserContext";

const Header: FunctionComponent = () => {
  const { userState, handleLogout } = useContext(UserContext);

  const navigate = useNavigate();

  const handleExit = () => {
    handleLogout();
    localStorage.removeItem("name");
    localStorage.removeItem("token");
    localStorage.removeItem("families");
    localStorage.removeItem("userData");
    navigate("/login", { replace: true });
  };

  const handleAddNewBill = () => {
    navigate("/addnewbill", { replace: true });
  };

  return (
    <StyledHeader>
      <StyledLink to="/">
        <h1>XPenses</h1>
      </StyledLink>

      {userState.isLogged && (
        <>
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
            <p>{userState.user.name}</p>
            <IconButton onClick={handleExit}>
              <LogoutIcon />
            </IconButton>
          </div>
        </>
      )}
    </StyledHeader>
  );
};

export default Header;
