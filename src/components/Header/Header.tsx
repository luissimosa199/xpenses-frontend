import { FunctionComponent } from "react";
import { StyledHeader } from "./Header.styled";

// interface HeaderProps {

// }
// <HeaderProps>

const Header: FunctionComponent = () => {
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

    </StyledHeader>
  );
};

export default Header;
