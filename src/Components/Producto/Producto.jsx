import React, { Component } from "react";
import ItemCount from "../ItemCount/ItemCount.jsx";

export default function Producto({ item }) {
    return (
        <>
            <p> {item.nombre} </p>
            <p> {"Stock disponible = " + item.stock} </p>
            <ItemCount item={item}/>  
        </>
    )
}