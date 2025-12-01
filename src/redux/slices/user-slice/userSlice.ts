import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {IUser} from "../../../models/IUser.ts";
import {getAll} from "../../../services/api.service.ts";

type UserSliceType = {
    users: IUser[],
    error: string | null;
}

const initUserSliceState: UserSliceType = {users: [], error: null};

const loadUsers = createAsyncThunk(
    'loadUsers',
    async (_, thunkAPI) => {
        try {
            const users = await getAll<IUser[]>('/users');

            return thunkAPI.fulfillWithValue(users);
        } catch (e) {
            return thunkAPI.rejectWithValue(`some error: ${e}`);
            //В случае ошибки выдает текст в консоль
        }

    }
);

//Асинхронная функция для загрузки пользователей с апи

export const userSlice = createSlice({
    name: 'userSlice',
    initialState: initUserSliceState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(loadUsers.fulfilled, (state, action: PayloadAction<IUser[]>) => {
            state.users = action.payload;
        })
        .addCase(loadUsers.rejected, (state, action) => {
            state.error = action.payload as string;
            console.log(state);
        })
});

export const usersActions = {...userSlice.actions, loadUsers};