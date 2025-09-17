import {useEffect, useState} from "react";
import type {ICommentPlaceholder} from "../../models/comment/ICommentPlaceholder.ts";
import {getAllPlaceholder} from "../../services/placeholder.service.tsx";
import CommentComponentPlaceholder from "../comment/CommentComponentPlaceholder.tsx";

const CommentsComponentPlaceholder = () => {
    const [comments, setComments] = useState<ICommentPlaceholder[]>([])

    useEffect(() => {
        getAllPlaceholder<ICommentPlaceholder[]>('/comments')
            .then((comments) => setComments(comments))
    }, []);
    return (
        <div>
            {
                comments.map(comment => <CommentComponentPlaceholder key={comment.id} comment={comment}/>)
            }
        </div>
    );
};

export default CommentsComponentPlaceholder;