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

    //retorna la cantidad de elementos del carrito
    const cantElemInCart = cart.reduce((total, item) => {
        return (parseInt(total) + parseInt(item.cantidad))
    }, 0)




    //retorna la suma total de dinero acumulado en el carrito
    const sumPrecioElemInCart = cart.reduce((total, item) => {
        const cantidad = item.cantidad;
        const valor = item.item.precio;
        const precioTotal = parseInt(cantidad) * parseInt(valor);
        return (parseInt(total) + parseInt(precioTotal));
    }, 0)

       const isInCart = (id) => {
        //retorna true si existe el elemento
        return cart.some(element => element.item.id === id)
    }

    return (
        <>
            <cartContext.Provider value={{ cart, agregarAlCarrito, quitarDelCarrito, vaciarCarrito, cantElemInCart, sumPrecioElemInCart }}>
                {children}

            </cartContext.Provider>
        </>
    )
}

export default CartProvaider;