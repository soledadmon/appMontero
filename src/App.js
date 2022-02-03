import './App.css';
import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/Productos/ItemListContainer';
import CategoriaListContainer from './Components/Categorias/CategoriaListContainer';
import ItemDetailConteiner from './Components/DetalleProductos/ItemDetailConteiner';
import Cart from './Components/Carrito/Cart';
import portada from './Imagenes/portada.jpg';
import CartProvider from './Components/Carrito/CartProvider';

//<ItemListContainer />
function App() {

  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Switch>

            {/* ruta home */}
            <Route exact path="/">
              <>
                <div id="portada">
                  <img id="imagenportada" src={portada} />
                </div>
              </>
            </Route>


            <Route path="/category/:id">
              <ItemListContainer />
            </Route>

            <Route exact path="/productos">
              <ItemListContainer />
            </Route>

            <Route exact path="/categorias">
              <CategoriaListContainer />
            </Route>

            <Route path="/item/:id">
              <ItemDetailConteiner />
            </Route>

            <Route path="/cart">
              <Cart />
            </Route>

          </Switch>
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
