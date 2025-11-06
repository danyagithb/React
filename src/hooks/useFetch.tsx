import {useEffect, useState} from "react";

export const useFetch = <T, >(url: string, defaultValue: T) => {
    const [users, setUsers] = useState<T>(defaultValue);

    useEffect(() => {
        fetch(url)
            .then(value => value.json())
            .then(users => setUsers(users))
    }, []);

    return users

}