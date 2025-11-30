import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {IComment} from "../../../models/IComment.ts";
import {getAll} from "../../../services/api.service.ts";

type CommentSliceType = {
    comments: IComment[],
    error: string | null
}

const loadComments = createAsyncThunk(
    'loadComments',
    async (_, thunkAPI) => {
        try {
            const comments = await getAll<IComment[]>('/comments');

            return thunkAPI.fulfillWithValue(comments);
        } catch (e) {
            return thunkAPI.rejectWithValue(`some error: ${e}`);
        }
    }
);

const initCommentSliceState: CommentSliceType = {comments: [], error: null};

export const commentSlice = createSlice({
    name: 'commentSlice',
    initialState: initCommentSliceState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(loadComments.fulfilled, (state, action: PayloadAction<IComment[]>) => {
            state.comments = action.payload
        })
        .addCase(loadComments.rejected, (state, action) => {
            state.error = action.payload as string;
            console.log(state);
        })
});

export const commentsActions = {...commentSlice.actions, loadComments};