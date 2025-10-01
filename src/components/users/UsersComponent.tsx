import {useEffect, useState} from "react";
import {getUsers} from "../../services/api.service.tsx";
import type {IUserResponse} from "../../models/IUserResponse.ts";
import type {IUser} from "../../models/IUser.ts";
import UserComponent from "../user/UserComponent.tsx";

const UsersComponent = () => {

    const [users, setUsers] = useState<IUser[]>([])
    useEffect(() => {
        getUsers().then(({users}: IUserResponse) => {
            setUsers(users)
        })
    }, []);

    return (
        <div>
            {
                users.map((user: IUser) => <UserComponent key={user.id} user={user}/>)
            }
        </div>
    );
};

export default UsersComponent;