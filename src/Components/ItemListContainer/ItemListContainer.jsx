import React, { useEffect, useState } from "react";
import ItemList from '../Item/ItemList.jsx';

export default function ItemListContainer() {
    const [items, setItems] = useState([
        { nombre: 'Helado de Vainilla', stock: 10, cantInicial: 2 },
        { nombre: 'Helado de Chocolate', stock: 4, cantInicial: 0 },
        { nombre: 'Helado de Frutilla', stock: 1, cantInicial: 1 },
        { nombre: 'Heledo de Dulce de Leche', stock: 8, cantInicial: 4 },

    ]);
    const [llegoPromesa, setLlegoPromesa] = useState(false);

    const productos = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve (items);
            reject("Server Caido");
        }, 2000)

    });

    useEffect(() => {
        productos
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
                <ItemList items={items} />
                : <>Loading..</>
        }
        </>
    )
} 
