import type {IUser} from "../../models/IUser.ts";
import type {FC} from "react";

type UserPropsType = {
    user: IUser
}

const UserComponent: FC<UserPropsType> = ({user}) => {
    return (
        <div>
            <p>id: {user.id}</p>
            <p>{user.name} - {user.username}</p>
        </div>
    );
};

export default UserComponent;