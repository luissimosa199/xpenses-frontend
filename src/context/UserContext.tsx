import { createContext } from "react";
import { State } from "./ContextInterfaces";

export type UserContextProps = {
  userState: State
}

export const UserContext = createContext<UserContextProps>({} as UserContextProps);
