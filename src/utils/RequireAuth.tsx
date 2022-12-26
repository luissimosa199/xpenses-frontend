import { FunctionComponent} from "react";
import { Navigate } from "react-router-dom";

interface RequireAuthProps {
  children: JSX.Element;
}

export const RequireAuth: FunctionComponent<RequireAuthProps> = ({
  children,
}) => {
  return !localStorage.getItem("token") ? (
    <Navigate to="/login" replace={true} />
  ) : (
    children
  );
};
