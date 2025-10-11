import UsersComponent from "../components/users/UsersComponent.tsx";
import PaginationComponent from "../components/pagination/PaginationComponent.tsx";

const UsersPage = () => {
    return (
        <div className={'flex flex-col gap-y-3 p-4'}>
            <UsersComponent/>
            <PaginationComponent/>
        </div>
    );
};

export default UsersPage;