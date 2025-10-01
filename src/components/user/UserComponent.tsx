import type {FC} from "react";
import type {IUser} from "../../models/IUser.ts";

type UserPropsType = {
    user: IUser
}

const UserComponent: FC<UserPropsType> = ({user}) => {
    return (
        <div>
            {user.firstName} - {user.id}
        </div>
    );
};

export default UserComponent;