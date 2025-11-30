import {useAppDispatch, useAppSelector} from "../../redux/store.ts";
import {useEffect} from "react";
import {commentsActions} from "../../redux/slices/comment-slice/commentSlice.ts";
import CommentComponent from "./CommentComponent.tsx";

const CommentsComponent = () => {

    const dispatch = useAppDispatch();
    const comments = useAppSelector((state) => state.commentStoreSlice.comments);
    useEffect(() => {
        dispatch(commentsActions.loadComments());
    }, []);

    return (
        <div>
            {comments.map((comment) => <CommentComponent key={comment.id} comment={comment}/>)}
        </div>
    );
};

export default CommentsComponent;