import type {FC} from "react";
import type {ICommentPlaceholder} from "../../models/comment/ICommentPlaceholder.ts";

type CommentPropsType = {
    comment: ICommentPlaceholder
}

const CommentComponentPlaceholder: FC<CommentPropsType> = ({comment}) => {
    return (
        <div>
            {
                comment.email
            }
        </div>
    );
};

export default CommentComponentPlaceholder;