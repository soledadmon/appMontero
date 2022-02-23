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
                <table class="formPago" border="1">
                    <tr><input type="text" name="nombre" ref={nombreRef} placeholder="Nombre y Apelllido" /></tr>
                    <tr><input type="text" name="celular" ref={documentoRef} placeholder="Nro de Celular" /></tr>
                    <tr><input type="text" name="direccion" ref={direccionRef} placeholder="Direccion" /></tr>
                    <tr><input type="text" name="email" ref={emailRef} placeholder="Email" /></tr>
                    <tr><input type="text" name="departamento" ref={departamentoRef} placeholder="Departamento" /></tr>
                    <tr><input type="text" name="ciudad" ref={ciudadRef} placeholder="Ciudad" /></tr>
                    <tr><input type="text" name="celular" ref={celularRef} placeholder="Celular" /></tr>
                </table>
                <br></br>

                <button onClick={() => handleClick()} > Comprar</button>
            </div>
        </>
    );
}