import { FunctionComponent, useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

interface RequireAuthProps {
  children: JSX.Element;
}

export const RequireAuth: FunctionComponent<RequireAuthProps> = ({
  children,
}) => {

  const { handleLogin } = useContext(UserContext);

  if (!localStorage.getItem("token") || !localStorage.getItem('userData')) {
    return <Navigate to="/login" replace={true} />;
  }

  const loginData = localStorage.getItem('userData')
  
  handleLogin(JSON.parse(loginData as string));

  return children;
};
