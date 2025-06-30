import './ProductCard.css'
import React from "react";
import {type FC, useState} from "react";
import type {IProduct} from "../../models/ModelProduct.ts";
import {ProductImage} from "../product-image/ProductImage.tsx";
import {ProductInfo} from "../product-info/ProductInfo.tsx";
import {ProductReviews} from "../product-reviews/ProductReviews.tsx";

type PropsType = {
    card: IProduct
}

export const ProductCard: FC<PropsType> = ({card}) => {
    const [showReviews, setShowReviews] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    const oldPriceScript = card.price / (1 - card.discountPercentage / 100);
    const oldPrice = oldPriceScript.toFixed(2);

    const reviewsClick = (ev: React.MouseEvent<HTMLButtonElement>) => {
        ev.stopPropagation();
        if(showReviews) {
            setShowReviews(false)
        } else {setShowReviews(true)}
    };

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            setShowReviews(false);
            setIsClosing(false);
        }, 300);
    };


    return (
        <div className={'product-card-wrapper'} onMouseLeave={() => setShowReviews(false)}>
            <div className={'product-card'}>
                <div className={'front-card'}>
                    <p className={'card-title'}>{card.title}</p>
                    <ProductImage src={card.thumbnail} alt={card.title}/>
                    <div className={'description-block'}>
                        <p>{card.description}</p>
                    </div>
                    <ul className={'card-price-box'}>
                        <li className={'card-price'}>{card.price}$</li>
                        <li className={'card-old-price'}>{oldPrice}$</li>
                    </ul>
                </div>
                <div className={'back-card'}>
                    <ProductInfo product={card}/>
                    {!showReviews && (
                        <button className="reviews-button" onClick={reviewsClick}>
                            Reviews
                        </button>
                    )}

                    {showReviews && (
                        <ProductReviews reviews={card.reviews} onClose={handleClose} isClosing={isClosing}/>
                    )}
                </div>
            </div>
        </div>
    );
};