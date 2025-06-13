import type {FC} from "react";
import type {TodoModel} from "../../models/todo-model.ts";

type PropsType = { todo: TodoModel };
export const Todo: FC<PropsType> = ({todo: {title, id, completed}}) => {
    return (
        <div>{id} {title} {completed.toString()}</div>
    );
};