import type {IUserPlaceholder} from "../../models/user/IUserPlaceholder.ts";
import type {FC} from "react";

type UserPropsType = {
    user: IUserPlaceholder
}

const UserComponentPlaceholder: FC<UserPropsType> = ({user}) => {
    return (
        <div>
            {
                user.name
            }
        </div>
    );
};

export default UserComponentPlaceholder;