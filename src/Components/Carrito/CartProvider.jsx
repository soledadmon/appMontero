import React, { createContext, useState } from "react";


export const cartContext = createContext();

const CartProvaider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const agregarAlCarrito = (producto, cantidad) => {
        //lo que tiene en el carrito mas setea el nuevo producto
        if (isInCart(producto.id)) {
            //si existe dentro del carrito => lo modifico, NO agrego otro
            const posicion = cart.findIndex(elemento => elemento.item.id === producto.id)
            cart[posicion].cantidad = cart[posicion].cantidad + cantidad;
            setCart([...cart]);
            console.log(cart);
        }
        else {

            setCart([...cart, { item: producto, cantidad: cantidad }]);

        }

    }

    const quitarDelCarrito = (id) => {
        //copio todos en un nuevo array con filter menos el que quiero quitar
        const updatedCart = cart.filter(elemento => elemento.item.id !== id)
        setCart(updatedCart);
    }

    const vaciarCarrito = () => {
        setCart([]);
    }

    const isInCart = (id) => {
        //retorna true si existe el elemento
        return cart.some(element => element.item.id === id)
    }

    return (
        <>
            <cartContext.Provider value={{ cart, agregarAlCarrito , quitarDelCarrito, vaciarCarrito}}>
                {children}

            </cartContext.Provider>
        </>
    )
}

export default CartProvaider;