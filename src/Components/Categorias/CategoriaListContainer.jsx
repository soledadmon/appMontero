import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route, useParams, Link } from 'react-router-dom';
import CategoriaList from './CategoriaList.jsx';
import sabores from '../../Imagenes/sabores.jpg';
import postres from '../../Imagenes/postres.jpg';
import promociones from '../../Imagenes/promociones.jpg';

export default function CategoriaListContainer() {
    
   

    const [items, setItems] = useState([
        {id:'1', nombre: 'Sabores',imagen: sabores},
        {id:'2', nombre: 'Postres',imagen:postres },
        {id:'3', nombre: 'Promociones',imagen:promociones },
        
    ]);
    const [llegoPromesa, setLlegoPromesa] = useState(false);

    const categorias = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve (items);
            reject("Server Caido");
        }, 2000)

    });

    useEffect(() => {
        categorias
            .then(res => {
                setLlegoPromesa(true);
                setItems(res);
               
            })

            .catch(err => {
                console.log(err);
            })
    });

    return (
        <> {
            (llegoPromesa) ?
                <CategoriaList items={items} />
                : <>Loading..</>
        }
        </>
    )
} 