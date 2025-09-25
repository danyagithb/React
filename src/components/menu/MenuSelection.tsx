import {Link} from "react-router";

const MenuSelection = () => {
    return (
        <div>
            <ul>
                <li><Link to={'jsonplaceholder'}>JsonPlaceholder</Link></li>
                <li><Link to={'dummyjson'}>DummyJson</Link></li>
            </ul>
        </div>
    );
};

export default MenuSelection;