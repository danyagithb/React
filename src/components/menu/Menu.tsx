import './Menu.css'
import {Link} from "react-router";

const Menu = () => {
    return (
        <div>
            <ul className={'menu-block'}>
                <li><Link to={''}>Home</Link></li>
                <li><Link to={'users/jsonplaceholder'}>Users jsonplaceholder</Link></li>
                <li><Link to={'users/dummyjson'}>Users dummyjson</Link></li>
                <li><Link to={'posts/jsonplaceholder'}>Posts jsonplaceholder</Link></li>
                <li><Link to={'posts/dummyjson'}>Posts dummyjson</Link></li>
                <li><Link to={'comments/jsonplaceholder'}>Comments jsonplaceholder</Link></li>
                <li><Link to={'comments/dummyjson'}>Comments dummyjson</Link></li>
            </ul>
        </div>
    );
};

export default Menu;