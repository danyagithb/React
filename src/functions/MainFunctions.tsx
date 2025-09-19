import ItemObjectComponent from "../components/render/ItemObjectComponent.tsx";
import ItemComponent from "../components/render/ItemComponent.tsx";

export const MainFunctions = {
    showValue: <T extends object> (value: T) => {
        const render = (obj: T) => {
            return Object.entries(obj).map(([key, item]) => {
                if (typeof item === "object" && item !== null) {
                    return (
                        <ItemObjectComponent key={key} itemKey={key} item={item}/>
                    )
                } else {
                    return (
                        <ItemComponent key={key} itemKey={key} item={String(item)}/>
                    )
                }
            });
        }

        return <div>{render(value)}</div>

    }

}
