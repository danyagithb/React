import {Outlet} from "react-router/internal/react-server-client";
import MenuSelection from "../../components/menu/MenuSelection.tsx";

const UsersPage = () => {
    return (
        <div>
            <MenuSelection/>
            <hr/>
            <Outlet/>
        </div>
    );
};

export default UsersPage;