import React, { useContext, useState } from "react";
import { cartContext } from "./CartProvider";
const CarritoItem = ({ producto }) => {

    const { quitarDelCarrito } = useContext(cartContext);
    return (
        <>   
        <p>          
            {producto.item.nombre} - Cantidad: {producto.cantidad} - 
            Precio por unidad: {producto.item.precio } - 
            Precio por Producto: {(producto.item.precio * producto.cantidad) + "   "}
            <button onClick={() => quitarDelCarrito(producto.item.id)}> X </button>
            <br></br>
            </p>  
        </>
    )
}

export default CarritoItem;