import './App.css'
import A from "./components/A.tsx";
import B from "./components/B.tsx";
import {defaultValue, MyContext} from "./context/MyContextProvider.tsx";
import {useState} from "react";

function App() {

      const [themeColor, setThemeColor] = useState<string>(defaultValue.theme)

      return (
        <div>
            <MyContext.Provider value={{
                theme: themeColor,
                changeTheme: (theme: string) => {
                    setThemeColor(theme);
                }
            }}>
                <A/>
                <B/>
            </MyContext.Provider>
        </div>
      )
}

export default App
