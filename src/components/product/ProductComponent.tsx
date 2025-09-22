import './Product.css';
import type {FC} from "react";
import type {IProduct} from "../../models/IProduct.ts";

type ProductPropsType = {
    product: IProduct
}

const ProductComponent: FC<ProductPropsType> = ({product}) => {
    return (
        <div className={'product'}>
            <img src={product.thumbnail} alt={product.title}/>
            <p className={'product-title'}>{product.title}</p>
            <p className={'product-price'}>{product.price}$</p>
        </div>
    );
};

export default ProductComponent;