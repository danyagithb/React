import {useEffect, useState} from "react";
import type {ICommentDummy} from "../../models/comment/ICommentDummy.ts";
import {getAllDummy} from "../../services/dummy.service.tsx";
import type {BaseResponseModelType} from "../../models/BaseResponseModelType.ts";
import CommentComponentDummy from "../comment/CommentComponentDummy.tsx";

const CommentsComponentDummy = () => {
    const [comments, setComments] = useState<ICommentDummy[]>([])

    useEffect(() => {
        getAllDummy<BaseResponseModelType & {comments: ICommentDummy[]}>('/comments')
            .then(({comments}) => setComments(comments))
    }, []);
    return (
        <div>
            {
                comments.map((comment: ICommentDummy) => <CommentComponentDummy key={comment.id} comment={comment}/>)
            }
        </div>
    );
};

export default CommentsComponentDummy;