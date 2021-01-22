export interface UserI {
    _id: string,
    email: string,
    roles: {
        admin:boolean,
    }
}