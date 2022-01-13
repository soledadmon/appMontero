import React from "react";

const ItemListContainer = ({dato}) =>{
    return (
        <>   
           <button style= {{backgroundColor: 'pink'}} onClick = {() => alert(dato)}> Cilc para probar alerta </button>  
                    
        </>
    )
}
export default ItemListContainer