import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './Item.css';
export default function Item({ item }) {    
    return (
        <>
            <div id="divGustos">
                <img id="imagenGustos" src={item.imagen} />
                <p> {item.nombre} </p>
                <p> {item.descripcion} </p>
                <p> {item.precio} </p>
                <p> {"Stock disponible = " + item.stock} </p>
                <Link to={"/item/" + item.id} > <button id="botones" style={{ fontFamily: "cursive" }}> <b>Ver Detalle</b> </button> </Link>
            </div>
        </>
    )
}