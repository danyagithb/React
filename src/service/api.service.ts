import type {IPost} from "../models/model-post.ts";

const endpointPosts = import.meta.env.VITE_URL_BASE_URL + '/posts';

const loadPosts = async (): Promise<IPost[]> => {
    return await fetch(endpointPosts)
        .then(value => value.json())
}

export {
    loadPosts
}