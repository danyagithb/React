import type {FC} from "react";
import type {IPost} from "../../models/model-post.ts";

type PropsType = { post: IPost}

export const PostComponent: FC<PropsType> = ({post: {id, title, body}}) => {
    return (
        <div>
            <div>ID: {id}</div>
            <div>Title: {title}</div>
            <div>Body: {body}</div>
        </div>
    );
};

// export const Todo: FC<PropsType> = ({todo: {title, id, completed}}) => {
//     return (
//         <div>{id} {title} {completed.toString()}</div>
//     );
// };