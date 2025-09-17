import type {FC} from "react";
import type {IPostDummy} from "../../models/post/IPostDummy.ts";

type PostPropsType = {
    post: IPostDummy
}

const PostComponentDummy: FC<PostPropsType> = ({post}) => {
    return (
        <div>
            {
                post.title
            }
        </div>
    );
};

export default PostComponentDummy;