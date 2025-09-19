import '../../styles/General.css';
import type {FC} from "react";
import type {ICommentPlaceholder} from "../../models/comment/ICommentPlaceholder.ts";
import {MainFunctions} from "../../functions/MainFunctions.tsx";

type CommentPropsType = {
    comment: ICommentPlaceholder
}

const CommentComponentPlaceholder: FC<CommentPropsType> = ({comment}) => {
    return (
        <div className={'block-item'}>
            {
                MainFunctions.showValue<ICommentPlaceholder>(comment)
            }
        </div>
    );
};

export default CommentComponentPlaceholder;