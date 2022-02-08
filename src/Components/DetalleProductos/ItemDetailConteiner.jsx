import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter, Switch, Route, useParams, Link } from 'react-router-dom';
import ItemDetail from "./ItemDetail";
import { cartContext } from "../Carrito/CartProvider";
import firebase from "firebase/app";
import "firebase/firestore";
import { getFirestore } from "../../firebase/firebase";

export default function ItemDetailContainer() {

    const [item, setItem] = useState();
    const [llegoPromesa, setLlegoPromesa] = useState(false);


    useEffect(() => {
        const base = getFirestore();
        const coleccionItems = base.collection("items") 
        const elemento = coleccionItems.doc('1xUfrzGuiZGMFNKof5ea');
       

        elemento.get().then((elem) =>
        {
            if(elem.size === 0)
            {
                alert("No se encontraron productos para mostrar")
            }
    
            setItem({id: elem.id, ...elem.data()});
            setLlegoPromesa(true); 
            console.log('imprimir elemento');  
            console.log(elem);       
    
        }).catch(err => {
                console.log(err);
            })
    }, []);


    const {agregarAlCarrito} = useContext(cartContext)
    const [mostrarItemCount, setmostrarItemCount] = useState(true);

    function onAdd(cantidadActual) {
        agregarAlCarrito(item, cantidadActual)
        alert("Agregue " + cantidadActual + " elementos")
        setmostrarItemCount(false)
    }


    return (
        <> {
            (llegoPromesa) ?
                <ItemDetail item={item} onAdd= {onAdd} mostrarItemCount = {mostrarItemCount}/>
                : <>Loading details..</>
        }
        </>
    )
} 