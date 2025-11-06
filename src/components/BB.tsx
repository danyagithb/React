import {useContext} from "react";
import {MyContext} from "../context/MyContextProvider.tsx";

const Bb = () => {

    const {theme, changeTheme} = useContext(MyContext);

    const handler1 = () => {
        changeTheme('dark');
    };
    const handler2 = () => {
        changeTheme('light');
    };

    const handler = () => {
        let themeValue;
        if (theme === 'dark') {
            themeValue = 'light'
        } else {
            themeValue = 'dark'
        }

        changeTheme(themeValue);
    }

    return (
        <div>
            <button onClick={handler1}>Change theme to dark</button>
            <button onClick={handler2}>Change theme to light</button>
            <button onClick={handler}>Change theme</button>
        </div>
    );
};

export default Bb;