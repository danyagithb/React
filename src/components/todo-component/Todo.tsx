import type {FC} from "react";
import type {TodoModel} from "../../models/todo-model.ts";

type PropsType = { todoItem: TodoModel };
export const Todo: FC<PropsType> = ({todoItem: {todo, id, completed}}) => {
    return (
        <div>{id} {todo} {completed.toString()}</div>
    );
};