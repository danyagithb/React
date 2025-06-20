import type {FC} from "react";
import type {IUser} from "../../models/model-comment.ts";

type PropsTypeUser = {
    user: IUser;
}

export const UserComponent: FC<PropsTypeUser> = ({user}) => {
    return (
        <div className={'user-item'}>
            {
                Object.entries(user).map(([key, value]) =>(
                    <p key={key}>
                        {key} - {value}
                    </p>
                ))
            }
        </div>
    );
};