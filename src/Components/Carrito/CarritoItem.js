import React, { useContext } from "react";
import { cartContext } from "./CartProvider";
import './CarritoItem.css';

const CarritoItem = ({ producto }) => {

    const { quitarDelCarrito } = useContext(cartContext);
    return (
        <>
            <table class="formPago" border="1">

                <tr id="cabeceraForm">
                    <td>Imagen</td>
                    <td>Producto</td>
                    <td>Cantidad</td>
                    <td> Precio Unidad</td>
                    <td> Precio de Productos</td>
                    <td> Quitar elemento</td>
                </tr>

                <tr id="cuerpoForm">
                    <td><img id="imagenDetalle" src={producto.item.imagen} /></td>
                    <td>{producto.item.nombre}</td>
                    <td>{producto.cantidad}</td>
                    <td>{producto.item.precio}</td>
                    <td> {(producto.item.precio * producto.cantidad) + "   "}</td>
                    <td><button onClick={() => quitarDelCarrito(producto.item.id)}> X </button></td>
                </tr>
                <br></br>
            </table>
        </>
    )
}

export default CarritoItem;