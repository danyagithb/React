import './ProductInfo.css'
import type {FC} from "react";
import type {IProduct} from "../../models/ModelProduct.ts";

type PropsTypeProduct = {
    product: IProduct
}

export const ProductInfo: FC<PropsTypeProduct> = ({product: {
    brand, sku, weight, warrantyInformation, shippingInformation,
    availabilityStatus, returnPolicy, minimumOrderQuantity, dimensions, tags, meta}}) => {
    return (
        <>
            <div className={'body-block'}>
                <div className={'about-block'}>
                    <h3 className={'block-title'}>Product Description And More</h3>
                    <p>Brand: {brand}</p>
                    <p>SKU: {sku}</p>
                    <p>Weight: {weight}</p>
                    <p>Warranty Information: {warrantyInformation}</p>
                    <p>Shipping Information: {shippingInformation}</p>
                    <p>Availability Status: {availabilityStatus}</p>
                    <p>Return Policy: {returnPolicy}</p>
                    <p>Minimum Order Quantity: {minimumOrderQuantity}</p>
                </div>

                <div className={'secondary-block'}>
                    <div className={'dimensions-block'}>
                        <h3 className={'block-title'}>Dimensions:</h3>
                        <div>
                            <p>Width: {dimensions.width}</p>
                            <p>Height: {dimensions.height}</p>
                            <p>Depth: {dimensions.depth}</p>
                        </div>
                    </div>
                    <div className={'meta-block'}>
                        <p>Tags: {tags.join(", ")}</p>
                        <p>Created At: {meta.createdAt}</p>
                        <p>Updated At: {meta.updatedAt}</p>
                        <p>Bar code: {meta.barcode}</p>
                        <img src={meta.qrCode} alt="Qr Code" className={'qr-code'}/>
                    </div>
                </div>
            </div>
        </>
    );
};