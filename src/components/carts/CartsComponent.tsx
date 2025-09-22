import './Carts.css';
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import type {ICart} from "../../models/ICart.ts";
import type {ICartResponseModel} from "../../models/ICartResponseModel.ts";
import CartComponent from "../cart/CartComponent.tsx";
import {cartService} from "../../services/api.service.tsx";

const CartsComponent = () => {
    const {id} = useParams();
    const [carts, setCarts] = useState<ICart[]>([])

    useEffect(() => {
        if (id) {
            cartService.getCartsOfUser(id).then(({carts}: ICartResponseModel) => setCarts(carts))
        }
    }, [id]);

    return (
        <div className={'carts'}>
            {
                carts.map((cart: ICart) => <CartComponent key={cart.id} cart={cart}/>)
            }
        </div>
    );
};

export default CartsComponent;