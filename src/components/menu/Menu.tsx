import './Menu.css'
import {Link} from "react-router";

const Menu = () => {
    return (
        <div>
            <ul className={'menu-block'}>
                <li><Link to={''}>Home</Link></li>
                <li><Link to={'users'}>Users</Link></li>
                <li><Link to={'posts'}>Posts</Link></li>
                <li><Link to={'comments'}>Comments</Link></li>
            </ul>
        </div>
    );
};

export default Menu;