import React, { Component, useState } from "react";
export default function ItemCount({ item, onAdd }) {
    
    const [cantidadActual, setcantidadActual] = useState(item.cantInicial);
    function sumar() {
        if (cantidadActual > item.stock - 1)
            alert("Se a alcaczado la cantidad de elementos disponible, NO se pueden agregar mas productos");
        else {
            let aux = cantidadActual;
            aux = cantidadActual + 1;
            setcantidadActual(aux);
        };
    }

    function restar() {
        if (cantidadActual <= 0)
            alert("NO hay elementos a descontar");
        else {
            let aux = cantidadActual;
            aux = cantidadActual - 1;
            setcantidadActual(aux);
        };
    }
    return (
        <>
            
            <p> <button id="botones" style={{ fontFamily: "cursive" }} onClick={() => restar()}> <b>-</b> </button>
                {" " + cantidadActual + " "}
                <button id="botones" style={{ fontFamily: "cursive" }} onClick={() => sumar()}> <b>+</b> </button>
            </p>
            <button id="botones" style={{ fontFamily: "cursive"  }} onClick={() => onAdd(cantidadActual)}> <b>Agregar al carrito</b> </button>
            
        </>
    )
}