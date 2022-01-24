import React, { useState } from "react";
import Item from './Item.jsx'



export default function ItemList(items) {
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
