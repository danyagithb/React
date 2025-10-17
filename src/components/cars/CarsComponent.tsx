import {useEffect, useState} from "react";
import {getCars} from "../../services/api.service.tsx";
import type {ICar} from "../../models/ICar.ts";
import CarComponent from "../car/CarComponent.tsx";

const CarsComponent = () => {

    const [cars, setCars] = useState<ICar[]>([]);

    useEffect(() => {
        getCars().then(cars => setCars(cars));
    }, []);

    return (
        <div className={'grid grid-cols-3 gap-4 p-5'}>
            {
                cars.map((car: ICar) => <CarComponent key={car.id} car={car}/>)
            }
        </div>
    );
};

export default CarsComponent;