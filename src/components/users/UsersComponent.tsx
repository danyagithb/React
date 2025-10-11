import {useEffect, useState} from "react";
import {getUsers} from "../../services/api.service.tsx";
import type {IUserResponse} from "../../models/IUserResponse.ts";
import type {IUser} from "../../models/IUser.ts";
import UserComponent from "../user/UserComponent.tsx";
import {useSearchParams} from "react-router-dom";

const UsersComponent = () => {
    const [searchParams] = useSearchParams({page: '1'});

    const [users, setUsers] = useState<IUser[]>([])
    useEffect(() => {
        const currentPage = searchParams.get('page') || '1';
        getUsers(currentPage).then(({users}: IUserResponse) => {
            setUsers(users)
        })
    }, [searchParams]);

    return (
        <div className={'grid grid-cols-3 gap-4'}>
            {
                users.map((user: IUser) => <UserComponent key={user.id} user={user}/>)
            }
        </div>
    );
};

export default UsersComponent;