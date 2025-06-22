import {type FC, useState} from "react";
import type {IProduct} from "../../models/ModelProduct.ts";
import {ProductImage} from "../product-image/ProductImage.tsx";

type PropsType = {
    card: IProduct
}

export const ProductCard: FC<PropsType> = ({card}) => {
    const [ShowDetails, setShowDetails] = useState(false);
    const [ShowReviews, setShowReviews] = useState(false);

    const oldPriceScript = card.price / (1 - card.discountPercentage / 100);
    const oldPrice = oldPriceScript.toFixed(2);

    return (
        <div>
            <p>{card.title}</p>
            <ProductImage src={card.thumbnail} alt={card.title}/>
            <ul>
                <li>{card.price}</li>
                <li>{oldPrice}</li>
            </ul>
        </div>
    );
};