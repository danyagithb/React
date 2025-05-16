import './App.css'
import type {ICourseModel} from "./models/models.ts";
import {CoursesComponent} from "./components/courses-component/CoursesComponent.tsx";

export const coursesAndDurationArray: ICourseModel[] = [
  {title: 'JavaScript Complex', monthDuration: 5},
  {title: 'Java Complex', monthDuration: 6},
  {title: 'Python Complex', monthDuration: 6},
  {title: 'QA Complex', monthDuration: 4},
  {title: 'FullStack', monthDuration: 7},
  {title: 'Frontend', monthDuration: 4}
];

function App() {
  return (
    <CoursesComponent/>
  )
}

export default App
