import './Post.css'
import type {FC} from "react";
import type {IPost} from "../../models/model-post.ts";
import {ReactionsComponent} from "../reactions-component/ReactionsComponent.tsx";

type PropsType = { post: IPost}

export const PostComponent: FC<PropsType> = ({post}) => {
    return (
        <div className={'post-item'}>
            <p>ID: {post.id}</p>
            <p>Title: {post.title}</p>
            <p>Body: {post.body}</p>
            <p>Tags: {post.tags.join(", ")}</p>
            <ReactionsComponent reactions={post.reactions}/>
        </div>
    );
};