import React, { useContext } from "react";
import './CartWidget.css';
import { cartContext } from "./CartProvider";


const CartWidget = () => {
    const { cantElemInCart } = useContext(cartContext);
    return (
        <>
            
                <img id="carrito" src={'/Img/carrito.png'} />
                <p id = "texto"> {cantElemInCart} </p>
            

        </>
    )
}

export default CartWidget;