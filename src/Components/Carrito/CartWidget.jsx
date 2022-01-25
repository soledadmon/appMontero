import React from "react";
import carrito from '../../Imagenes/carrito.png';
import './CartWidget.css';

 const CartWidget = () => {
    return (
        <>      
            <img id = "carrito" src={carrito}/>
                        
        </>
    )
}

export default CartWidget;