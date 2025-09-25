import {Link} from "react-router";

const MenuSelection = () => {
    return (
        <div>
            <ul>
                <li><Link to={'jsonplaceholder'}>Json Placeholder</Link></li>
                <li><Link to={'dummyjson'}>Dummy Json</Link></li>
            </ul>
        </div>
    );
};

export default MenuSelection;