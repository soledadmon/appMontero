import React, { useState, useRef } from "react";
import firebase from "firebase/app";
import { getFirestore } from "../../firebase/firebase";
import './FormularioPago.css';

export default function FormularioPago(carrito, total) {

    const [orderId, setOrderId] = useState('');

    const nombreRef = useRef();
    const documentoRef = useRef();
    const direccionRef = useRef();
    const ciudadRef = useRef();
    const departamentoRef = useRef();
    const emailRef = useRef();
    const celularRef = useRef();
    let mensaje = "";

    
    function validar() {
        let retorno = true;
        if ( document.getElementById('nombre').value == "" ||
             document.getElementById('documento').value=="" || 
             document.getElementById('direccion').value=="" ||
             document.getElementById('ciudad').value=="" || 
             document.getElementById('departamento').value== ""|| 
             document.getElementById('email').value=="" || 
             document.getElementById('celular').value=="" ) 
        {
            retorno = false;
            mensaje = "Debe competar todos los campos";
        }

        return retorno; 
        

    }
    function handleClick() {
        let valido = validar();
       
        if (valido) {
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
        else {
                alert(mensaje);
        }
    }

    return (

        <>
            {orderId && (<h1>Su order es {orderId}</h1>) }
       
            <div> 
                <h3>Ingrese sus datos:</h3>
                <table id="formPago" border="1">
                    <tr><input id="nombre" type="text" name="nombre" ref={nombreRef} placeholder="Nombre y Apelllido" /></tr>
                    <tr><input id="documento" type="text" name="documento" ref={documentoRef} placeholder="Nro de Documento" /></tr>
                    <tr><input id="direccion" type="text" name="direccion" ref={direccionRef} placeholder="Direccion" /></tr>
                    <tr><input id="email" type="text" name="email" ref={emailRef} placeholder="Email" /></tr>
                    <tr><input id="departamento" type="text" name="departamento" ref={departamentoRef} placeholder="Departamento" /></tr>
                    <tr><input id="ciudad" type="text" name="ciudad" ref={ciudadRef} placeholder="Ciudad" /></tr>
                    <tr><input id="celular" type="text" name="celular" ref={celularRef} placeholder="Celular" /></tr>
                </table>
                <br></br> 
                 {!orderId && 
                <button id="idComprar" onClick={() => handleClick()} > Comprar</button>}
            </div>
        </>
    );
}