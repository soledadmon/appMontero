import React, {useState} from "react";
import Producto from '../Producto/Producto.jsx'
import ItemCount from '../ItemCount/ItemCount.jsx';

export default function ItemListContainer (){
   
  
   const[arrayDeProductos, setarrayDeProductos] = useState([ 
   {nombre:'Helado de Vainilla', stock: 10, cantInicial:2},
   {nombre:'Helado de Chocolate',  stock: 4, cantInicial:0},
   {nombre:'Helado de Frutilla',  stock: 1, cantInicial:1},
   {nombre:'Heledo de Dulce de Leche', stock: 8, cantInicial:4},

   ]);
    return (
        <> 
        {
            arrayDeProductos.map(item=>{ 
                return <Producto item={item}/> 
            })
        }  
                  
        </>
    )
} 
