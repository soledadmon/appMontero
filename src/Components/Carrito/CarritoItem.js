import React, { useContext, useState } from "react";
import { cartContext } from "./CartProvider";
const CarritoItem = ({ producto }) => {

    const { quitarDelCarrito } = useContext(cartContext);
    return (
        <>
           
                {producto.item.nombre} - {producto.cantidad}
                {console.log(producto.item.id)}
                <button onClick={() => quitarDelCarrito(producto.item.id)}> X </button>

                <br></br>
        </>
    )
}

export default CarritoItem;