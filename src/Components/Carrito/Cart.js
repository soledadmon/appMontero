import React, { useContext, useState } from "react";
import { cartContext } from "./CartProvider";
import CarritoItem from "./CarritoItem";
import FormularioPago from "./FormularioPago";
import { Link, NavLink } from 'react-router-dom';


const Cart = () => {

    const { cart } = useContext(cartContext);
    const { vaciarCarrito } = useContext(cartContext);
    const { cantElemInCart } = useContext(cartContext);
    const { sumPrecioElemInCart } = useContext(cartContext);
    //<p><NavLink to={"/comprar"}><FormularioPago items={cart} total={sumPrecioElemInCart}/></NavLink></p>



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
                        <p>{"El carrito tiene " + cantElemInCart + " elementos"} </p>
                        <p>{"El precio total es " + sumPrecioElemInCart + " pesos uruguayos"} </p>
                        <FormularioPago carrito={cart} total={sumPrecioElemInCart}/>
                    </div>
            }

            

        </>
    )
}

export default Cart;