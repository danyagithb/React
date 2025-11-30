import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {IPost} from "../../../models/IPost.ts";
import {getAll} from "../../../services/api.service.ts";

type PostSliceType = {
    posts: IPost[],
    error: string | null
}

const initPostSliceState: PostSliceType = {posts: [], error: null};

const loadPosts = createAsyncThunk(
    'loadPosts',
    async (_, thunkAPI) => {
        try {
            const posts = await getAll<IPost[]>('/posts');
            return thunkAPI.fulfillWithValue(posts);
        } catch (e) {
            return thunkAPI.rejectWithValue(`some error: ${e}`)
        }
    }
);

export const postSlice = createSlice({
    name: 'postSlice',
    initialState: initPostSliceState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(loadPosts.fulfilled, (state, action: PayloadAction<IPost[]>) => {
            state.posts = action.payload;
        })
        .addCase(loadPosts.rejected, (state, action) => {
            state.error = action.payload as string;
            console.log(state);
        })
});

export const postsActions = {...postSlice.actions, loadPosts};