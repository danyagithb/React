import './CourseComponent.css'
import type {FC} from "react";
import type {ICourseModel} from "../../models/models.ts";

type PropsType = {
    course: ICourseModel;
}

export const CourseComponent: FC<PropsType> = ({course}) => {
    return (
        <li>{course.title}. Month Duration - {course.monthDuration}</li>
    )
}