import type {IComment} from "../models/model-comment.ts";
import type {ICommentDummy} from "../models/ModelResponseDummy.ts";

const endpointComments =import.meta.env.VITE_API_BASE_URL + '/comments';

const loadComments = async (): Promise<IComment[]> => {
    const response: ICommentDummy = await fetch(endpointComments)
        .then(value => value.json())

    return response.comments
}

export {
    loadComments
}