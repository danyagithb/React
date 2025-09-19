import '../../styles/General.css';
import type {IUserPlaceholder} from "../../models/user/IUserPlaceholder.ts";
import {useEffect, useState} from "react";
import {getAllPlaceholder} from "../../services/placeholder.service.tsx";
import UserComponentPlaceholder from "../user/UserComponentPlaceholder.tsx";

const UsersComponentPlaceholder = () => {
    const [users, setUsers] = useState<IUserPlaceholder[]>([])

    useEffect(() => {
        getAllPlaceholder<IUserPlaceholder[]>('/users')
            .then((users) => setUsers(users))
    }, []);

    return (
        <div className={'container'}>
            <div className={'block'}>
                {
                    users.map(user => <UserComponentPlaceholder key={user.id} user={user}/>)
                }
            </div>
        </div>
    );
};

export default UsersComponentPlaceholder;