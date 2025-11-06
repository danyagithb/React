import UserComponent from "./UserComponent.tsx";
import {useFetch} from "../hooks/useFetch.tsx";
import type {IUser} from "../models/IUser.ts";
import IteratorComponent from "./IteratorComponent.tsx";
import {useCallback, useMemo} from "react";

const UsersComponent = () => {
    console.log('users');

    const foo = useCallback(() => {
        console.log('foo');
    }, []);
    // Из-за того, что при рендере функция пересоздается и получает новую ссылку,
    // она заново передается в IteratorComponent и мемомизация не срабатывает.
    // Поэтому используем хук useCallback, который исправит эту проблему.

    const arr: number[] = useMemo(() => {
        return [11, 22, 33, 44];
    }, []);
    // Рендер пересоздает arr, присваивая новую ссылку, поэтому мемомизация не срабатывает.
    // Чтобы такого избежать пишем useMemo, где формируем функцию, которая возвращает массив [11, 22, 33, 44]

    const users = useFetch<IUser[]>('https://jsonplaceholder.typicode.com/users', []);

    return (
        <div>
            <IteratorComponent foo={foo} arr={arr}/>

            {
                users.map((user: IUser) => <UserComponent user={user} key={user.id}/>)
            }
        </div>
    );
};

export default UsersComponent;