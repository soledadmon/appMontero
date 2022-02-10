import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route, useParams, Link } from 'react-router-dom';
import ItemList from './ItemList.jsx';
import vainilla from '../../Imagenes/vainilla.jpg';
import frutilla from '../../Imagenes/frutilla.jpg';
import dulceDeLecheGranizado from '../../Imagenes/dulceDeLecheGranizado.jpg';
import chocolate from '../../Imagenes/chocolate.jpg';
import PostreAlmendrado from '../../Imagenes/PostreAlmendrado.jpg';
import PostreDDL from '../../Imagenes/PostreDDL.jpg';
import PostreFantasia from '../../Imagenes/PostreFantasia.jpg';
import promo2_1 from '../../Imagenes/promo2_1.jpg';
import promo4s from '../../Imagenes/promo4s.jpg';
import promokg from '../../Imagenes/promokg.jpg';
import firebase from "firebase/app";
import "firebase/firestore";
import { getFirestore } from "../../firebase/firebase";

export default function ItemListContainer() {

    const { id } = useParams();

    const [items, setItems] = useState();
    const [llegoPromesa, setLlegoPromesa] = useState(false);

    useEffect(() => {
        const base = getFirestore();
        const coleccionItems = base.collection("items")



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


    function evaluo(items) {

        if (id > 0) {

            let arrayAux = new Array();
            items.forEach(element => {
                if (element.categoriaId == id) {

                    arrayAux.push(element);
                }

            });
         items = arrayAux;
        }
        return items;
    }

    return (
        <> {
            (llegoPromesa) ?

                <ItemList items={evaluo(items)} />
                : <>Loading..</>
        }
        </>
    )
} 
