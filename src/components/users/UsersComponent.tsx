import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../redux/store.ts";
import {usersActions} from "../../redux/slices/user-slice/userSlice.ts";
import UserComponent from "./UserComponent.tsx";
import type {IUser} from "../../models/IUser.ts";

const UsersComponent = () => {

    const dispatch = useAppDispatch();
    const users = useAppSelector((state) => state.userStoreSlice.users);
    useEffect(() => {

        dispatch(usersActions.loadUsers());

    }, []);

    return (
        <div>
            {users.map((user: IUser) => <UserComponent key={user.id} user={user}/>)}
        </div>
    );
};

export default UsersComponent;