import './AA.css';
import {useContext} from "react";
import {MyContext} from "../context/MyContextProvider.tsx";

const Aa = () => {

    const {theme} = useContext(MyContext)
    
    return (
        <div className={theme}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Blanditiis corporis earum exercitationem expedita ipsam nobis repellendus, temporibus?
            Accusantium adipisci delectus deleniti et facilis itaque, nesciunt nisi quibusdam sapiente velit veniam?
        </div>
    );
};

export default Aa;