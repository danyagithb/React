import '../../styles/General.css';
import type {IPostPlaceholder} from "../../models/post/IPostPlaceholder.ts";
import type {FC} from "react";
import {MainFunctions} from "../../functions/MainFunctions.tsx";

type PostPropsType = {
    post: IPostPlaceholder
}

const PostComponentPlaceholder: FC<PostPropsType> = ({post}) => {
    return (
        <div className={'block-item'}>
            {
                MainFunctions.showValue<IPostPlaceholder>(post)
            }
        </div>
    );
};

export default PostComponentPlaceholder;