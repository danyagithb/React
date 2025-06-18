import type {TodoModel} from "../models/todo-model.ts";
import type {IPostDummy} from "../models/TodoResponseDummy.ts";

const endpointTodos = import.meta.env.VITE_API_BASE_URL + '/todos'

const loadTodos = async (): Promise<TodoModel[]> => {
    const response:IPostDummy = await fetch(endpointTodos)
        .then(value => value.json())

    return response.todos;

}

export {
    loadTodos
}
