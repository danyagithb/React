import './Post.css'
import type {FC} from "react";
import type {IPost} from "../../models/IPost.ts";

type PostPropsType = {
    post: IPost
}

const PostComponent: FC<PostPropsType> = ({post}) => {
    return (
        <div className={'post'}>
            <h3 className={'post-title'}>{post.title}</h3>
            <p>{post.body}</p>
        </div>
    );
};

export default PostComponent;