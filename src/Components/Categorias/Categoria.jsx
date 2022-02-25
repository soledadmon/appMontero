import React from "react";
import './Categoria.css';
export default function Categoria({ item }) {
   
    return (
        <>
            <div id="divCategorias">
              
                <img id="imagenCategoria" src={item.imagen} />
                <p> {item.nombre} </p>        

            </div>
        </>
    )
}