import './User.css';
import type {FC} from "react";
import type {IUser} from "../../models/IUser.ts";

type UserPropsType = {
    user: IUser
}

const UserComponent: FC<UserPropsType> = ({user}) => {
    return (
        <div className={'user'}>
            <p>Name: {user.username}</p>
            <p>Age: {user.age}</p>
            <p>Email: {user.email}</p>
            <p>Gender: {user.gender}</p>
        </div>
    );
};

export default UserComponent;