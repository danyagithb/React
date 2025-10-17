import type {FC} from "react";
import type {ICar} from "../../models/ICar.ts";

type CarPropsType = {
    car: ICar
}

const CarComponent: FC<CarPropsType> = ({car}) => {
    return (
        <div className={
            'flex flex-col gap-2.5 justify-center content-center' +
            ' bg-emerald-300 border-2 p-3 rounded-xl'
        }>
            <p className={'text-xl font-medium'}>Id: {car.id}</p>
            <p>Brand: {car.brand}</p>
            <p>Price: {car.price}</p>
            <p>Year: {car.year}</p>
        </div>
    );
};

export default CarComponent;