import React, { Component, useState } from "react";


export default function ItemCount({ item }) {
    
    function onAdd(){
        alert("Elemento agregado")
    }
     
    const[cantidadActual, setcantidadActual] = useState(item.cantInicial);
   

    function sumar(){    
        if (cantidadActual > item.stock - 1)
            alert("Se a alcaczado la cantidad de elementos disponible, NO se pueden agregar mas productos");
        else 
        {   
            let aux = cantidadActual;
            aux = cantidadActual + 1;
            setcantidadActual(aux);
        };
    }

    function restar(){
        if (cantidadActual <= 0)
            alert("NO hay elementos a descontar");
        else 
        {   
            let aux = cantidadActual;
            aux = cantidadActual - 1;
            setcantidadActual(aux);
        };
    }

    return (
        <>
            
            <p> <button style={{ backgroundColor: 'pink' }} onClick={() => restar()}> - </button>
                {" " + cantidadActual + " "}
                <button style={{ backgroundColor: 'pink' }} onClick={() => sumar()}> + </button>
            </p>
            <button style={{ backgroundColor: 'pink' }} onClick={() => onAdd()}> Agregar al carrito </button>
            <br/>
            <br/>
        </>
    )
}