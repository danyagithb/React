import {Link} from "react-router-dom";

const MenuComponent = () => {
    return (
        <div>
            <ul>
                <li><Link to={''}>Home</Link></li>
                <li><Link to={'/login'}>Login</Link></li>
                <li><Link to={'/auth/resources'}>resources</Link></li>
            </ul>
        </div>
    );
};


export default MenuComponent;