import React, { useState } from "react";
import swal from 'sweetalert';

export default function ItemCount({ item, onAdd }) {
    
    const [cantidadActual, setcantidadActual] = useState(item.cantInicial);
    function sumar() {
        if (parseInt(cantidadActual) > parseInt(item.stock - 1))
            swal("Información", "Se a alcaczado la cantidad de elementos disponible, NO se pueden agregar mas productos", "info");
        else {
            let aux = parseInt(cantidadActual);
            aux = parseInt(cantidadActual) + 1;
            setcantidadActual(aux);
        };
    }

    function restar() {
        if (parseInt(cantidadActual) <= 0 )
        swal("Información","NO hay elementos a descontar", "info");
        else if (parseInt(item.cantInicial) === 0)
        swal("Información","Lo lamentamos no contamos con " + item.nombre + "por el momento", "info");   
        else {
            let aux = parseInt(cantidadActual);
            aux = parseInt(cantidadActual) - 1;
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