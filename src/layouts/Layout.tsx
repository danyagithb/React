import {Outlet} from "react-router/internal/react-server-client";
import Menu from "../components/menu/Menu.tsx";

const Layout = () => {
    return (
        <div>
            <Menu/>
            <hr/>
            <Outlet/>
        </div>
    );
};

export default Layout;