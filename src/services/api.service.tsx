import axios from "axios";
import type {ICar} from "../models/ICar.ts";

export const axiosInstanse = axios.create({
    baseURL: 'http://owu.linkpc.net/carsAPI/v1',
    headers: {'Content-Type': 'application/json'},
});

export const getCars = async (): Promise<ICar[]> => {
    const axiosResponse = await axiosInstanse.get<ICar[]>('/cars');
    const cars = axiosResponse.data;
    return cars;
}

export const addCar = async (car: ICar) => {
    await axiosInstanse.post('/cars', car)
}
