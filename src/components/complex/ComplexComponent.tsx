import {useAppDispatch, useAppSelector} from "../../redux/store.ts";
import {useEffect} from "react";
import {usersActions} from "../../redux/slices/user-slice/userSlice.ts";
import {postsActions} from "../../redux/slices/post-slice/postSlice.ts";
import {commentsActions} from "../../redux/slices/comment-slice/commentSlice.ts";
import type {IUser} from "../../models/IUser.ts";
import UserComponent from "../users/UserComponent.tsx";
import type {IPost} from "../../models/IPost.ts";
import PostComponent from "../posts/PostComponent.tsx";
import type {IComment} from "../../models/IComment.ts";
import CommentComponent from "../comments/CommentComponent.tsx";

const ComplexComponent = () => {

    const dispatch = useAppDispatch();
    const {
        commentStoreSlice: {comments},
        postStoreSlice: {posts},
        userStoreSlice: {users}
    } = useAppSelector(state => state);

    useEffect(() => {
        if(!users.length) {
            dispatch(usersActions.loadUsers());
        }
        if(!posts.length) {
            dispatch(postsActions.loadPosts());
        }
        if(!comments.length) {
            dispatch(commentsActions.loadComments());
        }
    }, []);
    return (
        <div>
            <div>USERS: {users.map((user:IUser) => <UserComponent key={user.id} user={user}/>)}</div>
            <div>POSTS: {posts.map((post: IPost) => <PostComponent key={post.id} post={post}/>)}</div>
            <div>COMMENTS: {comments.map((comment: IComment) => <CommentComponent key={comment.id} comment={comment}/>)}</div>
        </div>
    );
};

export default ComplexComponent;