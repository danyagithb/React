import './Todos.css'
import {useEffect, useState} from "react";
import type {TodoModel} from "../../models/todo-model.ts";

export const Todos = () => {
    const [todos, setTodos] = useState<TodoModel[]>()
    useEffect(() => {
        // loadTodos.then()
    }, [])
    return (
        <div></div>
    );
};