import React, { useState } from "react";
import Item from './Categoria.jsx'



export default function CategoriaList(items) {
    return (
        <>
            {
            items.items.map(item => {
                return < Item item={item} />
            })
            }

        </>
    )
} 