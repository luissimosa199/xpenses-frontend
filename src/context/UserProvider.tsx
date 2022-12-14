import { FunctionComponent, useReducer } from 'react'
import { State } from './ContextInterfaces'
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
        isLogged: false,
    },
}

export const UserProvider: FunctionComponent<Props> = ({ children }) => {

    const [userState, dispatch] = useReducer( userReducer, INITIAL_STATE )

    return <UserContext.Provider value={{
        userState
    }}>
        {children}
    </UserContext.Provider>
}