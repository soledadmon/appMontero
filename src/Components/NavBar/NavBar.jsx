import React, {Component} from "react";
import './NavBar.css';
import  Carrito from '../Carrito/Carrito';
 
export default function NavBar(){
    return (
        <>  
                       
            <div id="barra">
                <ul>
                    <li><a href="#">Elemento 1</a></li>
                    <li><a href="#">Elemento 2</a></li>
                    <li><a href="#">Elemento 3</a></li>
                    <li><a href="#">Elemento 4</a></li>
                    <li><Carrito/></li>
                </ul>
            </div>
           
        </>
    )
}




