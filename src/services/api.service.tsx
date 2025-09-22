import type {IUserResponseModel} from "../models/IUserResponseModel.ts";
import type {ICartResponseModel} from "../models/ICartResponseModel.ts";

const baseUrl = import.meta.env.VITE_BASE_URL;

export const userService = {
    getALlUsers: async(): Promise<IUserResponseModel> => {
        return await fetch(baseUrl + '/users')
            .then(value => value.json())
    }
};

export const cartService = {
    getCartsOfUser: async (userId: string): Promise<ICartResponseModel> => {
        return await fetch(baseUrl+ '/carts/user/' + userId)
            .then(res => res.json())
    }
};