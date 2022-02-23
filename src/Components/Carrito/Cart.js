import React, { useContext } from "react";
import { cartContext } from "./CartProvider";
import CarritoItem from "./CarritoItem";
import FormularioPago from "./FormularioPago";
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = () => {

    const { cart } = useContext(cartContext);
    const { vaciarCarrito } = useContext(cartContext);
    const { cantElemInCart } = useContext(cartContext);
    const { sumPrecioElemInCart } = useContext(cartContext);


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
                        <table class="formPago" border="1">
                            <tr id="pieForm">
                                <td></td>
                                <td id="textos">Cantidad Total:</td>
                                <td id="valores"> {"  " + cantElemInCart}</td>
                                <td id="textos">Precio Total:</td>
                                <td id="valores"> {"  " + sumPrecioElemInCart}</td>
                                <td id="vaciar"> <button onClick={() => vaciarCarrito()}> Vaciar Carrito </button></td>
                            </tr> 
                        </table>
                        <br></br> <br></br>
                        <table id="tablaAviso" border="1">
                            <tr>
                                <td id="aviso"> <p>{"Para realizar la compra deberá competar el formulario y clickear en el botón comprar"}</p></td>
                            </tr>
                        </table>
                        <FormularioPago carrito={cart} total={sumPrecioElemInCart} />
                    </div>
            }



        </>
    )
}

export default Cart;