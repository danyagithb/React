import './Cart.css';
import type {FC} from "react";
import type {ICart} from "../../models/ICart.ts";
import type {IProduct} from "../../models/IProduct.ts";
import ProductComponent from "../product/ProductComponent.tsx";

type CartPropsType = {
    cart: ICart
}

const CartComponent: FC<CartPropsType> = ({cart}) => {
    return (
        <div className={'cart'}>
            {
                cart.products.map((product: IProduct)=> <ProductComponent key={product.id} product={product}/>)
            }
        </div>
    );
};

export default CartComponent;