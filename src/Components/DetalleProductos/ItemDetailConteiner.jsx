import React, { useContext, useEffect, useState } from "react";
import {useParams } from 'react-router-dom';
import ItemDetail from "./ItemDetail";
import { cartContext } from "../Carrito/CartProvider";
import "firebase/firestore";
import { getFirestore } from "../../firebase/firebase";
import swal from 'sweetalert';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function ItemDetailContainer() {

    const { id } = useParams();
    const [item, setItem] = useState();
    const [llegoPromesa, setLlegoPromesa] = useState(false);


    useEffect(() => {
        const base = getFirestore();
        const coleccionItems = base.collection("items") 
        const elemento = coleccionItems.doc(id);
       

        elemento.get().then((elem) =>
        {
            if(elem.size === 0)
            {
                swal("Información","No se encontraron productos para mostrar","info")
            }
    
            setItem({id: elem.id, ...elem.data()});
            setLlegoPromesa(true);       
    
        }).catch(err => {
                console.log(err);
            })
    }, []);


    const {agregarAlCarrito} = useContext(cartContext)
    const [mostrarItemCount, setmostrarItemCount] = useState(true);

    function onAdd(cantidadActual) {
        agregarAlCarrito(item, cantidadActual)
        toast.configure();
        toast("Se agregaron " + cantidadActual + " elementos al carrito")
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