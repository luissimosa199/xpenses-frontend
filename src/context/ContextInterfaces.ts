export interface User{
    _id: string,
    name: string,
    email: string,
    families: string | string[] | null,
}

export interface State {
    user: User,
    isLogged: boolean,
}