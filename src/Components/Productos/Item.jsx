import React, { Component } from "react";
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

            </div>
        </>
    )
}