import { State, User } from "./ContextInterfaces";

type UserAction =
    | { type: 'USER_LOGIN', payload: User }
    | { type: 'USER_LOGOUT' }


export const userReducer = (state: State, action: UserAction): State => {
    switch (action.type) {
        case 'USER_LOGIN':
            return {
                user: {
                    _id: action.payload._id,
                    name: action.payload.name,
                    email: action.payload.email,
                    families: action.payload.families,
                },
                isLogged: true,
            }
        case 'USER_LOGOUT':
            return {
                user: {
                    _id: '',
                    name: '',
                    email: '',
                    families: '',
                },
                isLogged: false,
            }

        default:
            return state;
    }
}