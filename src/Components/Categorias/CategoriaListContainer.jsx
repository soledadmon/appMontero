import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route, useParams, Link } from 'react-router-dom';
import CategoriaList from './CategoriaList.jsx';
import firebase from "firebase/app";
import "firebase/firestore";
import { getFirestore } from "../../firebase/firebase";
export default function CategoriaListContainer() {
    
    const [items, setItems] = useState();
    const [llegoPromesa, setLlegoPromesa] = useState(false);

    useEffect(() => {
        const base = getFirestore();
        const coleccionItems = base.collection("categorias")

        coleccionItems.get().then((querySnapShot) => {
            if (querySnapShot.size === 0) {
                alert("No se encontraron productos para mostrar")
            }

            setItems(querySnapShot.docs.map((doc) => {
                return {
                    id: doc.id, ...doc.data()
                }
            }));
            setLlegoPromesa(true);


        }).catch(err => {
            console.log(err);
        })
    }, []);

    return (
        <> {
            (llegoPromesa) ?
                <CategoriaList items={items} />
                : <>Loading..</>
        }
        </>
    )
} 