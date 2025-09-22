import './User.css';
import {type FC} from "react";
import type {IUser} from "../../models/IUser.ts";
import {useNavigate} from "react-router-dom";

type UserPropsType = {
    user: IUser
}

const UserComponent: FC<UserPropsType> = ({user}) => {
    const navigate = useNavigate();

    const onButtonClickNavigate = () => {
        navigate('/users/' + user.id + '/carts')
    }

    return (
        <div>
            <p>{user.username} - {user.id}</p>
            <button className={'user-button'} onClick={onButtonClickNavigate}>More</button>
        </div>
    );
};

export default UserComponent;