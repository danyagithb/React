import type {IPost} from "../models/model-post.ts";
import type {IResponseDummy} from "../models/ModelResponse.ts";

const endpointPosts = import.meta.env.VITE_API_BASE_URL + '/posts'


const loadPosts = async (): Promise<IPost[]> => {
    const response: IResponseDummy = await fetch(endpointPosts)
        .then(value => value.json())
    return response.posts;
}

export {
    loadPosts
}