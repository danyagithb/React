import type {TodoModel} from "./todo-model.ts";

export interface IPostDummy {
    todos: TodoModel[],
    total: number,
    skip: number,
    limit: number
}