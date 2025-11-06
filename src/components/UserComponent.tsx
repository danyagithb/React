import type {FC} from "react";
import type {IUser} from "../models/IUser.ts";

type UsersPropsType = {
    user: IUser;
}

const UserComponent: FC<UsersPropsType> = ({user}) => {
    console.log('user')
    return (
        <div>
            {user.email}
        </div>
    );
};

export default UserComponent;