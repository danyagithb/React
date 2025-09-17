import type {IPostPlaceholder} from "../../models/post/IPostPlaceholder.ts";
import {useEffect, useState} from "react";
import {getAllPlaceholder} from "../../services/placeholder.service.tsx";
import PostComponentPlaceholder from "../post/PostComponentPlaceholder.tsx";

const PostsComponentPlaceholder = () => {
    const [posts, setPosts] = useState<IPostPlaceholder[]>([])

    useEffect(() => {
        getAllPlaceholder<IPostPlaceholder[]>('/posts')
            .then((posts) => setPosts(posts))
    }, []);
    return (
        <div>
            {
                posts.map(post => <PostComponentPlaceholder key={post.id} post={post}/>)
            }
        </div>
    );
};

export default PostsComponentPlaceholder;