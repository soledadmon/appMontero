import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter, Switch, Route, useParams, Link } from 'react-router-dom';
import ItemDetail from "./ItemDetail";
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
import { cartContext } from "../Carrito/CartProvider";


export default function ItemDetailContainer() {


    const { id } = useParams();

    const [items, setItems] = useState(

        [
            { id: '1', nombre: 'Helado de Vainilla', imagen: vainilla, descripcion: 'El mejor cremoso helado de vainilla', stock: 10, cantInicial: 2, categoriaId: '1', precio:'', detalle:'' },
            { id: '2', nombre: 'Helado de Chocolate', imagen: chocolate, descripcion: 'Super cremoso y con todo el sabor a chocolate', stock: 4, cantInicial: 0, categoriaId: '1', precio:'', detalle:'' },
            { id: '3', nombre: 'Helado de Frutilla', imagen: frutilla, descripcion: 'Super cremoso y con trozos de frutilla', stock: 4, cantInicial: 0, categoriaId: '1', precio:'', detalle:'' },
            { id: '4', nombre: 'Heledo de Dulce de Leche', imagen: dulceDeLecheGranizado, descripcion: 'El mejor dulce de leche hecho helado', stock: 8, cantInicial: 4, categoriaId: '1', precio:'',detalle:'' },
            { id: '5', nombre: 'Postre Almendrado', imagen: PostreAlmendrado, descripcion: '12 porciones', stock: 10, cantInicialId: 1, categoriaId: '2', precio:'$600', detalle:'Postre combinado con tres sabores y tropezones de almendras' },
            { id: '6', nombre: 'Postre Dulce de Leche', imagen: PostreDDL, descripcion: '8 porciones', stock: 5, cantInicialId: 1, categoriaId: '2', precio:'$400', detalle:'Para los amantes del dulce de leche, van a encontrar el sabor concentrado del dulce de leche un crema atercipelada que cubre un bizcocuelo de vainilla'},
            { id: '7', nombre: 'Postre Fantasía', imagen: PostreFantasia, descripcion: '12 porciones', stock: 15, cantInicialId: 1, categoriaId: '2', precio:'$600' ,detalle:'Toda la fantacia en un postre, con una combinacion de sabores y coleres a elección'},
            { id: '8', nombre: 'Promo 1', imagen: promo2_1, descripcion: 'Promo 2x1', stock: 10, cantInicial: 1, categoriaId: '3', precio:'$300', detalle: 'Todos los miércoles llevate dos cucuruchos grande por el precio de uno' },
            { id: '9', nombre: 'Promo 2', imagen: promo4s, descripcion: 'Promo 3Kg con 4 sabores', stock: 5, cantInicial: 1, categoriaId: '3', precio:'$1000', detalle:"Tres kg de helado con hasta 4 sabores a eleccion por tansolo $1.000" },
            { id: '10', nombre: 'Promo 3', imagen: promokg, descripcion: 'Promo por kg', stock: 15, cantInicial: 1, categoriaId: '3', precio:'$500', detalle:'Un kg de helado con hasta tres gustos a elegir por $500'  }

        ]

       

    );

  

    const [llegoPromesa, setLlegoPromesa] = useState(false);

    const getItem = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(  items.filter(item => item.id == id));
            reject("Server Caido");
        }, 2000)

    });

    useEffect(() => {
        getItem
            .then(res => {
                setLlegoPromesa(true);
                setItems(res);

            })

            .catch(err => {
                console.log(err);
            })
    });


    const {agregarAlCarrito} = useContext(cartContext)
    const [mostrarItemCount, setmostrarItemCount] = useState(true);

    function onAdd(cantidadActual) {
        agregarAlCarrito(items[0], cantidadActual)
        alert("Agregue " + cantidadActual + " elementos")
        setmostrarItemCount(false)
    }


    return (
        <> {
            (llegoPromesa) ?
                <ItemDetail item={items[0]} onAdd= {onAdd} mostrarItemCount = {mostrarItemCount}/>
                : <>Loading details..</>
        }
        </>
    )
} 