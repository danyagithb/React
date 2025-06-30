import './ProductReview.css';
import type {FC} from "react";
import type {Reviews} from "../../models/ModelProduct.ts";

type PropsTypeReview = {
    review: Reviews;
}

export const ProductReview: FC<PropsTypeReview> = ({review: {reviewerName, comment, reviewerEmail, rating, date}}) => {
    const stars = Array.from({ length: rating }, (_, i) => i);

    return (
        <div className={'review-box'}>
            <div className={'review-about-user'}>
                <p>{reviewerName}</p>
                <p>
                    {stars.map((_, i) => (
                        <span key={i}>⭐️</span>
                    ))}
                </p>
            </div>
            <div className={'review-body'}>
                <p>{comment}</p>
                <p>Date: {date}</p>
                <p>{reviewerEmail}</p>
            </div>
        </div>
    );
};