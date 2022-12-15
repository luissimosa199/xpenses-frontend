import { createContext } from "react";
import { State, User } from "./ContextInterfaces";

export type UserContextProps = {
  userState: State,
  handleLogin: ( loginData: User ) => void,
  handleLogout: () => void,
}

export const UserContext = createContext<UserContextProps>({} as UserContextProps);
