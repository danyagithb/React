import type {FC} from "react";
import type {IProduct} from "../../models/ModelProduct.ts";

type PropsTypeProduct = {
    product: IProduct
}

export const ProductInfo: FC<PropsTypeProduct> = ({product: {
    description, brand, sku, weight, warrantyInformation, shippingInformation,
    availabilityStatus, returnPolicy, minimumOrderQuantity, dimensions, tags, meta}}) => {
    return (
        <>
            <h3>Product Description And More</h3>
            <p>{description}</p>
            <p>Brand: {brand}</p>
            <p>SKU: {sku}</p>
            <p>Weight: {weight}</p>
            <p>Warranty Information: {warrantyInformation}</p>
            <p>Shipping Information: {shippingInformation}</p>
            <p>Availability Status: {availabilityStatus}</p>
            <p>Return Policy: {returnPolicy}</p>
            <p>Minimum Order Quantity: {minimumOrderQuantity}</p>
            <div>Dimensions:
                <p>Width: {dimensions.width}</p>
                <p>Height: {dimensions.height}</p>
                <p>Depth: {dimensions.depth}</p>
            </div>
            <p>Tags: {tags.join(", ")}</p>
            <p>Created At: {meta.createdAt}</p>
            <p>Updated At: {meta.updatedAt}</p>
            <p>Bar code: {meta.barcode}</p>
            <img src={meta.qrCode} alt="Qr Code"/>
        </>
    );
};