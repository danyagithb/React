import '../../styles/General.css';
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
        <div className={'container'}>
            <div className={'block'}>
                {
                    posts.map(post => <PostComponentPlaceholder key={post.id} post={post}/>)
                }
            </div>
        </div>
    );
};

export default PostsComponentPlaceholder;