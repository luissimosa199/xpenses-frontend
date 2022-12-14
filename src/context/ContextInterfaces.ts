export interface User{
    _id: string,
    name: string,
    email: string,
    families: string | string[],
    isLogged: boolean,
}

export interface State {
    user: User
}