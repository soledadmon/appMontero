import React, { Component } from "react";
import './ItemDetail.css';
import ItemCount from "../ItemCount/ItemCount.jsx";

export default function ItemDetail({ item }) {
    return (
        <>
            <div id="divDetalle">
                <img id="imagenDetalle" src={item.imagen} />
                <p> {item.nombre} </p>
                <p> {item.descripcion} </p>
                <h1> {item.precio} </h1>
                <h2> {item.detalle} </h2>
                <p> {"Stock disponible = " + item.stock} </p>
                <ItemCount item={item} />
            </div>
        </>
    )
}