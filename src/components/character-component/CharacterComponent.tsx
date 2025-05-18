import './CharacterComponent.css'
import type {ICharacter} from "../../models/ICharacter.ts";
import type {ReactNode} from "react";

interface CharacterComponentProps {
    item: ICharacter,
    children: ReactNode,
}

export const CharacterComponent = ({item, children}: CharacterComponentProps) => {
    return (
        <div className={'block'}>
            <h3>{item.name} {item.surname}. {item.age} y.</h3>
            <p>{children}</p>
            <img src={item.photo} alt={item.name}/>
        </div>
    )
}