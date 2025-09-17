import type {IPostDummy} from "../../models/post/IPostDummy.ts";
import {useEffect, useState} from "react";
import {getAllDummy} from "../../services/dummy.service.tsx";
import type {BaseResponseModelType} from "../../models/BaseResponseModelType.ts";
import PostComponentDummy from "../post/PostComponentDummy.tsx";

const PostsComponentDummy = () => {
    const [posts, setPosts] = useState<IPostDummy[]>([])

    useEffect(() => {
        getAllDummy<BaseResponseModelType & {posts: IPostDummy[]}>('/posts')
            .then(({posts}) => setPosts(posts))
    }, []);
    return (
        <div>
            {
                posts.map((post: IPostDummy) => <PostComponentDummy key={post.id} post={post}/>)
            }
        </div>
    );
};

export default PostsComponentDummy;