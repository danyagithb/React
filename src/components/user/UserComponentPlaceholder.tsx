import '../../styles/General.css';
import type {IUserPlaceholder} from "../../models/user/IUserPlaceholder.ts";
import type {FC} from "react";
import {MainFunctions} from "../../functions/MainFunctions.tsx";

type UserPropsType = {
    user: IUserPlaceholder
}

const UserComponentPlaceholder: FC<UserPropsType> = ({user}) => {
    return (
        <div className={'block-item'}>
            {
                MainFunctions.showValue<IUserPlaceholder>(user)
            }
        </div>
    );
};

export default UserComponentPlaceholder;