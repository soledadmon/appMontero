import React, { Component } from "react";
import './ItemDetail.css';
import ItemCount from "../ItemCount/ItemCount.jsx";

export default function ItemDetail({ item }) {
    return (
        <>
            
            <img id = "imagenGustos"  src={item.imagen}/>
            <p> {item.nombre} </p>
            <p> {item.descripcion} </p>
            <p> {item.precio} </p>
            <p> {"Stock disponible = " + item.stock} </p>
            <ItemCount item={item} />
             
        </>
    )
}