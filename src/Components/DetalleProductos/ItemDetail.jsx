import React, { Component, useState } from "react";
import { Link } from 'react-router-dom';
import './ItemDetail.css';
import ItemCount from "../ItemCount/ItemCount.jsx";


export default function ItemDetail({ item , mostrarItemCount, onAdd}) {
    console.log(item.imagen);
    return ( 
        <>
            <div id="divDetalle">
               
                <img id="imagenDetalle" src={item.imagen} />
                <p> {item.nombre} </p>
                <p> {item.descripcion} </p>
                <h1> {item.precio + "$"} </h1>
                <h2> {item.detalle} </h2>
                <p> {"Stock disponible = " + item.stock} </p>
                {(mostrarItemCount) ?
                    <ItemCount item={item} onAdd={onAdd} />
                    :
                    <Link to={"/cart/"} > <button id="botones" style={{ fontFamily: "cursive" }}> <b>Terminar Compra</b> </button> </Link>

                    

                }
            </div>
        </>
    )
}