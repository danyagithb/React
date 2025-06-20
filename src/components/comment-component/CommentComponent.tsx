import './Comment.css';
import type {FC} from "react";
import type {IComment} from "../../models/model-comment.ts";
import {UserComponent} from "../user-component/UserComponent.tsx";

type PropsType = {comment: IComment}

export const CommentComponent: FC<PropsType> = ({comment}) => {
    return (
        <div className={'comment-item'}>
            <p className={'comment-main'}>ID: {comment.id}</p>
            <p>Body: {comment.body}</p>
            <p>Post ID: {comment.postId}</p>
            <p>Likes: {comment.likes}</p>
            <div className={'user-box'}>
                User: <UserComponent user={comment.user}/>
            </div>
        </div>
    );
};