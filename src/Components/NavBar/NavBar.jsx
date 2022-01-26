import React, { Component } from "react";
import './NavBar.css';
import Carrito from '../Carrito/CartWidget';

export default function NavBar() {
    return (
        <>

            <div id="barra">
                <ul>
                    <li><a href="/">Inicio</a></li>
                    <li><a href="/categorias">Categorias</a></li>
                    <li><a href="/category/1">Sabores</a></li>
                    <li><a href="/category/2">Postres</a></li> 
                    <li><a href="/category/3">Promociones</a></li>                   
                    <li><a href="/productos">Todos los productos</a></li>
                    <li><Carrito /></li>
                </ul>
            </div>

        </>
    )
}




