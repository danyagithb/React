import type {FC} from "react";
import type {IUserDummy} from "../../models/user/IUserDummy.ts";

type UserPropsType = {
    user: IUserDummy
}

const UserComponentDummy: FC<UserPropsType> = ({user}) => {
    return (
        <div>
            {user.address.country}
        </div>
    );
};

export default UserComponentDummy;