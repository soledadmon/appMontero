import React, { useContext, useState } from "react";
import { cartContext } from "./CartProvider";
import CarritoItem from "./CarritoItem";
import { Link } from 'react-router-dom';

const Cart = () => {

    const { cart } = useContext(cartContext);
    const { vaciarCarrito } = useContext(cartContext);
    const { cantElemInCart } = useContext(cartContext);
    const {sumPrecioElemInCart} = useContext(cartContext);

    return (
        <>
        {
            cart.length === 0 ?
                <div>
                    <p>Carrito Vacio</p>
                    <Link to='/'> Ir a la tienda</Link>
                </div>
                :
                <div>
                    {cart.map(elemento => <CarritoItem key={elemento.item.id} producto={elemento} />)}
                    <button onClick={() => vaciarCarrito()}> Vaciar Carrito </button>
                    <p>{"el carrito tiene " + cantElemInCart + " elementos"} </p> 
                    <p>{"El precio total es " + sumPrecioElemInCart + " pesos uruguayos"} </p> 
                    
                </div>
        }
        </>
    )
}

export default Cart;