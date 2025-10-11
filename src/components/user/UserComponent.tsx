import type {FC} from "react";
import type {IUser} from "../../models/IUser.ts";

type UserPropsType = {
    user: IUser
}

const UserComponent: FC<UserPropsType> = ({user}) => {
    return (
        <div className={
            'bg-amber-100 border-2 border-amber-950 rounded-md p-3' +
            ' flex flex-col gap-1 justify-center content-center'}>
            <p className={'text-center'}>{user.firstName} {user.lastName} - {user.id}</p>
            <p className={'text-center'}>{user.email}</p>
            <p className={'text-center'}>Phone: {user.phone}</p>
        </div>
    );
};

export default UserComponent;