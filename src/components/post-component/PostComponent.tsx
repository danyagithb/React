import './Post.css'
import type {FC} from "react";
import type {IPost} from "../../models/model-post.ts";

type PropsType = { post: IPost}

export const PostComponent: FC<PropsType> = ({post: {id, title, body}}) => {
    return (
        <div className={'post-item'}>
            <div>ID: {id}</div>
            <div>Title: {title}</div>
            <div>Body: {body}</div>
        </div>
    );
};