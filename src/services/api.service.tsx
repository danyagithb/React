import type {IUserResponse} from "../models/IUserResponse.ts";

const baseUrl = import.meta.env.VITE_API_BASE_URL;

export const getUsers = async (page: string): Promise<IUserResponse> => {
    const limit = 30;
    const skip = (+page) * limit - limit;

    return await fetch(baseUrl + '/users' + '?skip=' + skip)
        .then(value => value.json())
}