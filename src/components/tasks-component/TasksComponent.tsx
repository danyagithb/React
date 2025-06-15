import {useEffect, useState} from "react";
import type {ITask} from "../../models/model-task.ts";


export const TasksComponent = () => {
    const [tasks, setTasks] = useState<ITask[]>([]);
    useEffect(() => {
        loadTask().then(value => setTasks(value))
    }, []);
    return (
        <div>

        </div>
    );
};

// export const Todos = () => {
//     const [todos, setTodos] = useState<TodoModel[]>([]);
//     useEffect(() => {
//         loadTodos().then(value => setTodos(value))
//     }, [])
//     return (
//         <div>
//             {
//                 todos.map(todo => <Todo todo={todo} key={todo.id}/>)
//             }
//         </div>
//     );
// };