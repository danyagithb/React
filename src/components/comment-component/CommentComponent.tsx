import './Comment.css';
import type {FC} from "react";
import type {IComment} from "../../models/model-comment.ts";

type PropsType = {comment: IComment}

export const CommentComponent: FC<PropsType> = ({comment: {id, name, email, body}}) => {
    return (
        <div className={'comment-item'}>
            <div className={'comment-main'}>ID: {id}</div>
            <div>Name: {name}</div>
            <div>Email: {email}</div>
            <div>Body: {body}</div>
        </div>
    );
};