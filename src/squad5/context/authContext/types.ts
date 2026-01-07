import type { IUserMock } from "../../interface"


export interface IContext {
    user: IUserMock | null,
    login: (email: string, name: string) => void
    logout: () => void
}