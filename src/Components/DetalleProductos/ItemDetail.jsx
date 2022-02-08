import React, { Component, useState } from "react";
import { Link } from 'react-router-dom';
import './ItemDetail.css';
import ItemCount from "../ItemCount/ItemCount.jsx";
import vainilla from '../../Imagenes/vainilla.jpg';
import frutilla from '../../Imagenes/frutilla.jpg';
import dulceDeLecheGranizado from '../../Imagenes/dulceDeLecheGranizado.jpg';
import chocolate from '../../Imagenes/chocolate.jpg';
import PostreAlmendrado from '../../Imagenes/PostreAlmendrado.jpg';
import PostreDDL from '../../Imagenes/PostreDDL.jpg';
import PostreFantasia from '../../Imagenes/PostreFantasia.jpg';
import promo2_1 from '../../Imagenes/promo2_1.jpg';
import promo4s from '../../Imagenes/promo4s.jpg';
import promokg from '../../Imagenes/promokg.jpg';

export default function ItemDetail({ item , mostrarItemCount, onAdd}) {
    const dirImagen = item.imagen;
    
    return ( 
        <>
            <div id="divDetalle">
               
                <img id="imagenDetalle" src={dirImagen} />
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