import type {IPostPlaceholder} from "../../models/post/IPostPlaceholder.ts";
import type {FC} from "react";

type PostPropsType = {
    post: IPostPlaceholder
}

const PostComponentPlaceholder: FC<PostPropsType> = ({post}) => {
    return (
        <div>
            {
                post.title
            }
        </div>
    );
};

export default PostComponentPlaceholder;