import type {FC} from "react";
import type {IComment} from "../../models/IComment.ts";

type CommentPropsType = {
    comment: IComment
}

const CommentComponent: FC<CommentPropsType> = ({comment}) => {
    return (
        <div>
            <p>{comment.body} - {comment.id}</p>
        </div>
    );
};

export default CommentComponent;