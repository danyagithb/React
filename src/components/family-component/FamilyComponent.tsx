import './FamilyComponent.css'
import {coursesArray} from "../../data/data.ts";
import {ItemComponent} from "../item-component/ItemComponent.tsx";
import type {ICourse} from "../../models/ICourse.ts";

export const FamilyComponent = () => {
    return (
        <div className={'cont'}>
            {
                coursesArray.map((course: ICourse, index) => <ItemComponent key={index} course={course}/>
                )
            }
        </div>
    )
}