import React, { useContext, useState } from "react";
import { cartContext } from "./CartProvider";
import CarritoItem from "./CarritoItem";

const Cart = () => {

    const { cart } = useContext(cartContext);
    const { vaciarCarrito } = useContext(cartContext);

    return (
        <>
           {cart.map(elemento => <CarritoItem key={elemento.item.id} producto={elemento} />)}
       
           <button onClick={() => vaciarCarrito()}> Vaciar Carrito </button>
 </>
    )
}

export default Cart;