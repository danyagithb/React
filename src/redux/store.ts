import {configureStore} from "@reduxjs/toolkit";
import {userSlice} from "./slices/user-slice/userSlice.ts";
import {postSlice} from "./slices/post-slice/postSlice.ts";
import {commentSlice} from "./slices/comment-slice/commentSlice.ts";
import {useDispatch, useSelector} from "react-redux";

export const store = configureStore({
    reducer: {
        userStoreSlice: userSlice.reducer,
        postStoreSlice: postSlice.reducer,
        commentStoreSlice: commentSlice.reducer,
    }
});

export const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>();
export const useAppSelector = useSelector.withTypes<ReturnType<typeof store.getState>>();