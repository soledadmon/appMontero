import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route, useParams, Link } from 'react-router-dom';
import ItemList from './ItemList.jsx';
import firebase from "firebase/app";
import "firebase/firestore";
import { getFirestore } from "../../firebase/firebase";
import swal from "sweetalert";

export default function ItemListContainer() {

    const { id } = useParams();
    let paramId = parseInt(id);
    const [items, setItems] = useState();
    const [llegoPromesa, setLlegoPromesa] = useState(false);
    const base = getFirestore();


    useEffect(() => {

        let coleccion = base.collection("items")

        if (id > 0) {

            coleccion = base.collection("items").where('categoriaId', '==', paramId)
        }


        coleccion.get().then((querySnapShot) => {
            if (querySnapShot.size === 0) {
                swal("No se encontraron productos para mostrar")
            }

            setItems(querySnapShot.docs.map((doc) => {
                return {
                    id: doc.id, ...doc.data()
                }
            }));
            setLlegoPromesa(true);


        }).catch(err => {
            swal("Error", err, "error");
        })
    }, [id]);


    return (
        <> {
            (llegoPromesa) ?

                <ItemList items={items} />
                : <>Loading..</>
        }
        </>
    )
} 
