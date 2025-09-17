import {useEffect, useState} from "react";
import {getAllDummy} from "../../services/dummy.service.tsx";
import type {BaseResponseModelType} from "../../models/BaseResponseModelType.ts";
import type {IUserDummy} from "../../models/user/IUserDummy.ts";
import UserComponentDummy from "../user/UserComponentDummy.tsx";

const UsersComponentDummy = () => {
    const [users, setUsers] = useState<IUserDummy[]>([])

    useEffect(() => {
        getAllDummy<BaseResponseModelType & {users: IUserDummy[]}>('/users')
            .then(({users}) => setUsers(users))
    }, []);
    return (
        <div>
            {
                users.map((user: IUserDummy) => <UserComponentDummy key={user.id} user={user}/>)
            }
        </div>
    );
};

export default UsersComponentDummy;