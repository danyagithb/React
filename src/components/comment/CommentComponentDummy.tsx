import type {FC} from "react";
import type {ICommentDummy} from "../../models/comment/ICommentDummy.ts";

type CommentPropType= {
    comment: ICommentDummy
}

const CommentComponentDummy: FC<CommentPropType> = ({comment}) => {
    return (
        <div>
            {
                comment.user.username
            }
        </div>
    );
};

export default CommentComponentDummy;