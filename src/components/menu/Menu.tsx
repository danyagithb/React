import './Menu.css';
import {Link} from "react-router";

const Menu = () => {
    return (
        <div>
            <ul className={'menu'}>
                <li className={'menu-item'}><Link to={''}>Home</Link></li>
                <li className={'menu-item'}><Link to={'/users'}>Users</Link></li>
                <li className={'menu-item'}><Link to={'/posts'}>Posts</Link></li>
            </ul>
        </div>
    );
};

export default Menu;