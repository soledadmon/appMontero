import React, { useEffect, useState } from "react";
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


export default function ItemDetailContainer() {


    const { itemId } = useParams();

    const [items, setItems] = useState(

        [
            { id: '1', nombre: 'Helado de Vainilla', imagen: vainilla, descripcion: 'El mejor cremoso helado de vainilla', stock: 10, cantInicial: 2, categoriaId: '1' },
            { id: '2', nombre: 'Helado de Chocolate', imagen: chocolate, descripcion: 'Super cremoso y con todo el sabor a chocolate', stock: 4, cantInicial: 0, categoriaId: '1' },
            { id: '3', nombre: 'Helado de Frutilla', imagen: frutilla, descripcion: 'Super cremoso y con trozos de frutilla', stock: 4, cantInicial: 0, categoriaId: '1' },
            { id: '4', nombre: 'Heledo de Dulce de Leche', imagen: dulceDeLecheGranizado, descripcion: 'El mejor dulce de leche hecho helado', stock: 8, cantInicial: 4, categoriaId: '1' },
            { id: '5', nombre: 'Postre Almendrado', imagen: PostreAlmendrado, descripcion: '12 porciones', stock: 10, cantInicialId: 1, categoriaId: '2' },
            { id: '6', nombre: 'Postre Dulce de Leche', imagen: PostreDDL, descripcion: '8 porciones', stock: 5, cantInicialId: 1, categoriaId: '2' },
            { id: '7', nombre: 'Postre Fantasía', imagen: PostreFantasia, descripcion: '12 porciones', stock: 15, cantInicialId: 1, categoriaId: '2' },
            { id: '8', nombre: 'Promo 1', imagen: promo2_1, descripcion: 'Promo 2x1', stock: 10, cantInicial: 1, categoriaId: '3' },
            { id: '9', nombre: 'Promo 2', imagen: promo4s, descripcion: 'Promo 3Kg con 4 sabores', stock: 5, cantInicial: 1, categoriaId: '3' },
            { id: '10', nombre: 'Promo 3', imagen: promokg, descripcion: 'Promo por kg', stock: 15, cantInicial: 1, categoriaId: '3' }

        ]

       

    );

  

    const [llegoPromesa, setLlegoPromesa] = useState(false);

    const productos = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(  items.filter(item => item.categoriaId == itemId));
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
                <ItemDetail item={items[0]} />
                : <>Loading details..</>
        }
        </>
    )
} 