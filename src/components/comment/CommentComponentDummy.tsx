import type {FC} from "react";
import type {ICommentDummy} from "../../models/comment/ICommentDummy.ts";
import {MainFunctions} from "../../functions/MainFunctions.tsx";

type CommentPropType= {
    comment: ICommentDummy
}

const CommentComponentDummy: FC<CommentPropType> = ({comment}) => {
    return (
        <div>
            {
                MainFunctions.showValue<ICommentDummy>(comment)
            }
        </div>
    );
};

export default CommentComponentDummy;