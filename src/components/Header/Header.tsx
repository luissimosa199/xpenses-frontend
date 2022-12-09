import { FunctionComponent } from "react";
import { StyledHeader } from "./Header.styled";
import LogoutIcon from "@mui/icons-material/Logout";
import IconButton from "../containers/IconButton";
import AddIcon from '@mui/icons-material/Add';
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
          <li className="btn-add">
            <IconButton onClick={() => {console.log('CLICKED ADD')}}>
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
