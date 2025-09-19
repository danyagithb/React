import {MainFunctions} from "../../functions/MainFunctions.tsx";
import type {FC} from "react";

type ItemPropsType = {
    itemKey: string,
    item: object
}

const ItemObjectComponent: FC<ItemPropsType> = ({itemKey, item}) => {
    return (
        <>
            <p>Название объекта: {itemKey}</p>
            <div style={{ marginLeft: 20, fontWeight: 700 }}>Объект: {MainFunctions.showValue(item)}</div>
        </>
    );
};

export default ItemObjectComponent;