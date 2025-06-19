import type {IPost} from "./model-post.ts";

export interface IResponseDummy {
    posts: IPost[],
    total: number,
    skip: number,
    limit: number,
}