import React from "react";
import { CartContext } from "./context";

const PruebaContexto = () => {
    const {esMiercoles, saludar} = useContext (CartContext);

    return (
        <div className = "m-5">
            <h1>saludar()</h1>
        </div>
    )

}
export default PruebaContexto