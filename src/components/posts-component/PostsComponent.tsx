import {useEffect, useState} from "react";
import type {IPost} from "../../models/model-post.ts";


export const PostsComponent = () => {
    const [posts, setPosts] = useState<IPost[]>([]);
    useEffect(() => {
        loadPosts().then(value => setPosts(value))
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