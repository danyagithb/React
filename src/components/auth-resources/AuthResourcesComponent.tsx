import {useEffect} from "react";
import {loadAuthProducts, refresh} from "../../services/api.service.ts";

const AuthResourcesComponent = () => {

    useEffect(() => {

        loadAuthProducts().then(products => {
            console.log(products);
        }).catch(reason => {
            console.log(reason?.status);
            refresh()
                .then(() => loadAuthProducts())
                .then(value => console.log(value))
        })

    }, []);

    return (
        <div>

        </div>
    );
};

export default AuthResourcesComponent;