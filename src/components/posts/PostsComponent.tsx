import './Posts.css';
import {useEffect, useState} from "react";
import {getAll} from "../../services/general.service.tsx";
import type {IBaseResponseModel} from "../../models/IBaseResponseModel.ts";
import type {IPost} from "../../models/IPost.ts";
import PostComponent from "../post/PostComponent.tsx";

const PostsComponent = () => {
    const [posts, setPosts] = useState<IPost[]>([])

    useEffect(() => {
        getAll<IBaseResponseModel & {posts: IPost[]}>('/posts')
            .then(({posts}) => setPosts(posts))

    }, []);
    return (
        <div className={'posts'}>
            {
                posts.map((post: IPost) => <PostComponent key={post.id} post={post}/>)
            }
        </div>
    );
};

export default PostsComponent;