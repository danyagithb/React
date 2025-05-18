import {simpsons} from "../../data/data.ts";
import {CharacterComponent} from "../character-component/CharacterComponent.tsx";
import type {ICharacter} from "../../models/ICharacter.ts";

export const FamilyComponent = () => {
    return (
        <div>
            {
                simpsons.map((value: ICharacter, index) => <CharacterComponent key={index} item={value}>
                    {value.info}
                </CharacterComponent>)
            }
        </div>
    )
}