import type {FC} from "react";

type ItemPropsType = {
    itemKey: string,
    item: string
}

const ItemComponent: FC<ItemPropsType> = ({itemKey, item}) => {
    return (
        <div>
            <p>{itemKey}: {item}</p>
        </div>
    );
};

export default ItemComponent;