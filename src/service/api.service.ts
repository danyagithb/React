import type {ResponseDummyType} from "../models/ModelResponseDummy.ts";
import type {IProduct} from "../models/ModelProduct.ts";

const endpointProducts = import.meta.env.VITE_API_BASE_URL + '/products';

const loadProducts = async (): Promise<IProduct[]> => {
    const response: ResponseDummyType = await fetch(endpointProducts)
        .then(value => value.json())

    return response.products;
}

export {
    loadProducts
}