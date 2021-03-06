import React from "react";
import { NavLink } from 'react-router-dom' 
import './NavBar.css';
import Carrito from '../Carrito/CartWidget';

export default function NavBar() {
    return (
        <>

            <div id="barra">
                <ul>
                    <li><NavLink to = {"/"}>Inicio</NavLink></li>
                    <li><NavLink to = {"/categorias"}>Categorias</NavLink></li>
                    <li><NavLink to = {"/category/1"}>Sabores</NavLink></li>
                    <li><NavLink to = {"/category/2"}>Postres</NavLink></li> 
                    <li><NavLink to = {"/category/3"}>Promociones</NavLink></li>                   
                    <li><NavLink to = {"/productos/0"}>Todos los productos</NavLink></li>
                    <NavLink to = {"/cart"}><Carrito /></NavLink>
                    
                    
                </ul>
            </div> 

        </>
    )
}




