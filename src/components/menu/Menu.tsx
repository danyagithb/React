import {Link} from "react-router";

const Menu = () => {
    return (
        <div>
            <ul>
                <li><Link to={''}>Home</Link></li>
                <li><Link to={'users'}>Users</Link></li>
                <li><Link to={'Posts'}>Posts</Link></li>
                <li><Link to={'Comments'}>Comments</Link></li>
                <li><Link to={'Complex'}>Complex</Link></li>
            </ul>
        </div>
    );
};

export default Menu;