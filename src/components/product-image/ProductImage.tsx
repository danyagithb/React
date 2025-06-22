import './ProductImage.css'
import type {FC} from "react";

type PropsType = {
    src: string,
    alt: string
}

export const ProductImage: FC<PropsType> = ({src, alt}) => {
    return (
        <img src={src} alt={alt} className={'card-image'}/>
    );
};