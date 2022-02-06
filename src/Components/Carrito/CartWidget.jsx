import React, { useContext, useState } from "react";
import carrito from '../../Imagenes/carrito.png';
import './CartWidget.css';
import { cartContext } from "./CartProvider";


const CartWidget = () => {
    const { cantElemInCart } = useContext(cartContext);
    return (
        <>
            
                <img id="carrito" src={carrito} />
                <p id = "texto"> {cantElemInCart} </p>
            

        </>
    )
}

export default CartWidget;