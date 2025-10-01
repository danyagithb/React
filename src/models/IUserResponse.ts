import type {IUser} from "./IUser.ts";

export interface IUserResponse {
    users: IUser[],
    skip: number,
    limit: number,
    total: number
}