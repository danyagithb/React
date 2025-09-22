import './Users.css';
import {useEffect, useState} from "react";
import {getAll} from "../../services/general.service.tsx";
import type {IBaseResponseModel} from "../../models/IBaseResponseModel.ts";
import type {IUser} from "../../models/IUser.ts";
import UserComponent from "../user/UserComponent.tsx";

const UsersComponent = () => {
    const [users, setUsers] = useState<IUser[]>([])
    useEffect(() => {
        getAll<IBaseResponseModel & {users: IUser[]}>('/users')
            .then(({users}) => setUsers(users))
    }, []);
    return (
        <div className={'users'}>
            {
                users.map((user: IUser)=> <UserComponent key={user.id} user={user}/>)
            }
        </div>
    );
};

export default UsersComponent;