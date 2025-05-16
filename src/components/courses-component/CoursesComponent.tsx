import './CoursesComponent.css'
import {coursesAndDurationArray} from "../../App.tsx";
import type {ICourseModel} from "../../models/models.ts";
import {CourseComponent} from "../course-component/CourseComponent.tsx";

export const CoursesComponent = () => {
    return (
        <ul>
            {
                coursesAndDurationArray.map((course: ICourseModel, index: number) => {
                    return <CourseComponent key={index} course={course}/>
                })
            }
        </ul>
    );
};
