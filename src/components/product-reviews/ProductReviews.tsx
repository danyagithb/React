import './ProductReviews.css';
import type {FC} from "react";
import type {Reviews} from "../../models/ModelProduct.ts";
import {ProductReview} from "../product-review/ProductReview.tsx";

type PropsTypeReviews = {
    reviews: Reviews[];
    onClose: () => void;
    isClosing: boolean;
}

export const ProductReviews: FC<PropsTypeReviews> = ({reviews, onClose, isClosing}) => {
    return (
        <div className={`reviews-box ${isClosing ? 'closing' : ''}`}>
            {
                reviews.map((review, index) => <ProductReview key={index} review={review}/>)
            }
            <button className="close-btn" onClick={onClose}>Hide</button>
        </div>
    );
};