import {useEffect, useState} from "react";
import type {IProduct} from "../../models/ModelProduct.ts";
import {loadProducts} from "../../service/api.service.ts";
import {ProductCard} from "../product-card/ProductCard.tsx";

export const ProductsList = () => {
    const [cards, setCards] = useState<IProduct[]>([])
    useEffect(() => {
        loadProducts().then(value => setCards(value))
    }, []);
    return (
        <div>
            {
                cards.map(card => <ProductCard card={card} key={card.id}/>)
            }
        </div>
    );
};