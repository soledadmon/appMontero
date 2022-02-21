import React, { useState, useEffect, useRef } from "react";
import firebase from "firebase/app";
import { getFirestore } from "../../firebase/firebase";

export default function FormularioPago(carrito, total) {

    const [orderId, setOrderId] = useState('');

    const nombreRef = useRef();
    const documentoRef = useRef();
    const direccionRef = useRef();
    const ciudadRef = useRef();
    const departamentoRef = useRef();
    const emailRef = useRef();
    const celularRef = useRef();


    function handleClick() {

        const db = getFirestore();
        const orders = db.collection("orders");

        const miOrden = {
            buyer: {
                nombre: nombreRef.current.value,
                documento: documentoRef.current.value,
                direccion: direccionRef.current.value,
                ciudad: ciudadRef.current.value,
                departamento: departamentoRef.current.value,
                email: emailRef.current.value,
                celular: celularRef.current.value,
            },
            items: carrito,
            total: total,
            date: firebase.firestore.Timestamp.fromDate(new Date())
        }

        orders.add(miOrden)
            .then(({ id }) => {
                console.log('orden ingresada: ' + id);
                setOrderId(id);
            })
            .catch((err) => {
                console.log(err);
            });

    }

    return (

        <>
            {orderId && (<h1>Su order es {orderId}</h1>)}

            <div>
                <h3>Ingrese sus datos:</h3>

                <input type="text" name="nombre" ref={nombreRef} placeholder="Nombre y Apelllido" />
                <br />

                <input type="text" name="celular" ref={documentoRef} placeholder="Nro de Celular" />
                <br />

                <input type="text" name="direccion" ref={direccionRef} placeholder="Direccion" />
                <br />

                <input type="text" name="email" ref={emailRef} placeholder="Email" />
                <br />

                <input type="text" name="departamento" ref={departamentoRef} placeholder="Departamento" />
                <br />

                <input type="text" name="ciudad" ref={ciudadRef} placeholder="Ciudad" />
                <br />

               <input type="text" name="celular" ref={celularRef} placeholder="Celular" />
                <br />

                <button onClick={() => handleClick()} > Comprar</button>
            </div>
        </>
    );
}