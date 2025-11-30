import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../redux/store.ts";
import {postsActions} from "../../redux/slices/post-slice/postSlice.ts";
import type {IPost} from "../../models/IPost.ts";
import PostComponent from "./PostComponent.tsx";

const PostsComponent = () => {

    const dispatch = useAppDispatch();
    const posts = useAppSelector((state) => state.postStoreSlice.posts);
    useEffect(() => {
        dispatch(postsActions.loadPosts());
    }, []);
    return (
        <div>
            {posts.map((post: IPost) => <PostComponent key={post.id} post={post}/>)}
        </div>
    );
};

export default PostsComponent;