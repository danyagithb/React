import '../../styles/General.css';
import type {FC} from "react";
import type {IPostDummy} from "../../models/post/IPostDummy.ts";
import {MainFunctions} from "../../functions/MainFunctions.tsx";

type PostPropsType = {
    post: IPostDummy
}

const PostComponentDummy: FC<PostPropsType> = ({post}) => {
    return (
        <div className={'block-item'}>
            {
                MainFunctions.showValue<IPostDummy>(post)
            }
        </div>
    );
};

export default PostComponentDummy;