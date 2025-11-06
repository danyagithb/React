import {createContext} from "react";

export type MyContextType = {
    theme: string,
    changeTheme: (theme: string) => void
}

export const defaultValue: MyContextType = {
    theme: 'light',
    changeTheme: (theme: string) => {
        console.log(theme)
    }
};
export const MyContext = createContext<MyContextType>(defaultValue);