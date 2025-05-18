import './ItemComponent.css'
import type {ICourse} from "../../models/ICourse.ts";
import type {FC} from "react";

type PropsType = {
    course: ICourse,
}

export const ItemComponent: FC<PropsType> = ({course}) => {
    return (
        <div className={'block'}>
            <h3>{course.title}</h3>
            <p>Month Duration - {course.monthDuration}</p>
            <p>Hour Duration - {course.hourDuration}</p>
            <ul> Modules:
                {course.modules.map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

