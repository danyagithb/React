import type {FC} from "react";
import type {ICar} from "../../models/ICar.ts";

type CarPropsType = {
    car: ICar
}

const CarComponent: FC<CarPropsType> = ({car}) => {
    return (
        <div>
            <p>Id: {car.id}</p>
            <p>Brand: {car.brand}</p>
            <p>Price: {car.price}</p>
            <p>Year: {car.year}</p>
        </div>
    );
};

export default CarComponent;