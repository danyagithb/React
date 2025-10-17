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
        <div className={'flex justify-center p-5'}>
            <form onSubmit={handleSubmit(customHandler)} className={'max-w-sm border-1 rounded-xl text-center p-3'}>
                <div className={'p-1'}>
                    <input placeholder={'Brand'} type="text"{...register('brand')}
                           className={'border-1 rounded-md m-2 p-1 placeholder-gray-500'}/>
                    <div>{errors.brand?.message}</div>
                </div>

                <div className={'p-1'}>
                    <input placeholder={'Price'} type="number" {...register('price')}
                           className={'border-1 rounded-md m-2 p-1'}/>
                    <div>{errors.price?.message}</div>
                </div>

                <div className={'p-1'}>
                    <input placeholder={'Year'} type="number" {...register('year')}
                           className={'border-1 rounded-md m-2 p-1'}/>
                    <div>{errors.year?.message}</div>
                </div>

                <button type={"submit"} disabled={!isValid}
                        className={
                            'bg-blue-500 hover:bg-blue-700 transition border-1 border-blue-900 rounded-xl px-10 py-2' +
                            ' text-white font-bold cursor-pointer'
                        }>Send</button>
            </form>
        </div>
    );
};

export default FormComponent;