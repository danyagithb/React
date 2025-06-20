import type {IComment} from "./model-comment.ts";

export interface ICommentDummy {
    comments: IComment[],
    total: number,
    skip: number,
    limit: number
}