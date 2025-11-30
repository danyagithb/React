import type {FC} from "react";
import type {IPost} from "../../models/IPost.ts";

type PostPropsType = {
    post: IPost
}

const PostComponent: FC<PostPropsType> = ({post}) => {
    return (
        <div>
            <p>{post.title} - {post.id}</p>
        </div>
    );
};

export default PostComponent;