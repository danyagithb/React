import '../../styles/General.css';
import type {FC} from "react";
import type {IUserDummy} from "../../models/user/IUserDummy.ts";
import {MainFunctions} from "../../functions/MainFunctions.tsx";

type UserPropsType = {
    user: IUserDummy
}

const UserComponentDummy: FC<UserPropsType> = ({user}) => {
    return (
        <div className={'block-item'}>
            {
                MainFunctions.showValue<IUserDummy>(user)
            }
        </div>
    );
};

export default UserComponentDummy;