import './Comments.css';
import {useEffect, useState} from "react";
import {loadComments} from "../../service/api.service.ts";
import {CommentComponent} from "../comment-component/CommentComponent.tsx";
import type {IComment} from "../../models/model-comment.ts";


export const CommentsComponent = () => {
    const [comments, setComments] = useState<IComment[]>([]);
    useEffect(() => {
        loadComments().then(value => setComments(value))
    }, []);
    return (
        <div className={'comment-body'}>
            {
                comments.map(comment => <CommentComponent comment={comment} key={comment.id}/>)
            }
        </div>
    );
};