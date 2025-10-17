import {Link} from "react-router";

const MenuComponent = () => {
    return (
        <div>
            <ul>
                <li><Link to={'/cars'}>Cars</Link></li>
                <li><Link to={'/cars/create'}>Create car</Link></li>
            </ul>
        </div>
    );
};

export default MenuComponent;