import { FunctionComponent, useReducer } from 'react'
import { State, User } from './ContextInterfaces'
import { UserContext } from './UserContext'
import { userReducer } from './UserReducer'

interface Props {
    children: JSX.Element | JSX.Element[],
}

const INITIAL_STATE: State = {
    user: {
        _id: '',
        email: '',
        families: '',
        name: '',
    },
    isLogged: false,
}

export const UserProvider: FunctionComponent<Props> = ({ children }) => {

    const [userState, dispatch] = useReducer( userReducer, INITIAL_STATE )

    const handleLogin = (loginData: User) => {
        dispatch({ type: 'USER_LOGIN', payload: loginData})
    }

    const handleLogout = () => {
        dispatch({ type: 'USER_LOGOUT' })
    }

    return <UserContext.Provider value={{
        userState,
        handleLogin,
        handleLogout,
    }}>
        {children}
    </UserContext.Provider>
}