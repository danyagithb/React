import {useForm} from "react-hook-form";
import type {ICar} from "../../models/ICar.ts";
import {addCar} from "../../services/api.service.tsx";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../../validators/car.validator.tsx";

const FormComponent = () => {

    const {handleSubmit, register, formState: {errors, isValid}} = useForm<ICar>({mode: 'all', resolver: joiResolver(carValidator)});

    const customHandler = (data: ICar) => {
        addCar(data);
    }

    return (
        <>
            <form onSubmit={handleSubmit(customHandler)}>
                <div>
                    <label htmlFor="brand">Brand </label>
                    <input id={'brand'} type="text" {...register('brand')}/>
                    <div>{errors.brand?.message}</div>
                </div>

                <div>
                    <label htmlFor="price">Price </label>
                    <input id={'price'} type="number" {...register('price')}/>
                    <div>{errors.price?.message}</div>
                </div>

                <div>
                    <label htmlFor="year">Year </label>
                    <input id={'year'} type="number" {...register('year')}/>
                    <div>{errors.year?.message}</div>
                </div>
                <button type={"submit"} disabled={!isValid}>Send</button>
            </form>
        </>
    );
};

export default FormComponent;