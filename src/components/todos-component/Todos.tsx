import './Todos.css'
import {useEffect, useState} from "react";
import type {TodoModel} from "../../models/todo-model.ts";
import {loadTodos} from "../../service/api.service.ts";
import {Todo} from "../todo-component/Todo.tsx";

export const Todos = () => {
    const [todos, setTodos] = useState<TodoModel[]>([]);
    useEffect(() => {
        loadTodos().then(value => setTodos(value))
    }, [])
    return (
        <div>
            {
                todos.map(todo => <Todo todoItem={todo} key={todo.id}/>)
            }
        </div>
    );
};