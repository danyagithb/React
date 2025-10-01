import type {IUserResponse} from "../models/IUserResponse.ts";

const baseUrl = import.meta.env.VITE_API_BASE_URL;

export const getUsers = async (): Promise<IUserResponse> => {
    return await fetch(baseUrl + '/users')
        .then(value => value.json())
}