import {Link} from "react-router";

const MenuComponent = () => {
    return (
        <div className={'bg-emerald-200 p-3'}>
            <ul className={'flex flex-row justify-center content-center gap-5'}>
                <li className={'text-xl uppercase tracking-wider font-bold'}><Link to={'/cars'}>Cars</Link></li>
                <li className={'text-xl uppercase tracking-wider font-bold'}><Link to={'/cars/create'}>Create car</Link></li>
            </ul>
        </div>
    );
};

export default MenuComponent;