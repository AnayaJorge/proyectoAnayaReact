import React, {createContext, useState} from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {

    const [esMiercoles, setMiercoles] = useState ("Si")
    const saludar = () => {
        console.log ("Hola Amigos")
    }

    return (
        <CartContext.Provider value = {[]}>
            {children}
        </CartContext.Provider>

    )
}

export default CartContextProvider