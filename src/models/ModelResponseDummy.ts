import type {IProduct} from "./ModelProduct.ts";

export type ResponseDummyType = {
    products: IProduct[],
    total: number,
    skip: number,
    limit: number,
}