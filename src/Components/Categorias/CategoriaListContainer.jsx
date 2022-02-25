import React, { useEffect, useState } from "react";
import CategoriaList from './CategoriaList.jsx';
import "firebase/firestore";
import { getFirestore } from "../../firebase/firebase";
import swal from 'sweetalert';
export default function CategoriaListContainer() {
    
    const [items, setItems] = useState();
    const [llegoPromesa, setLlegoPromesa] = useState(false);

    useEffect(() => {
        const base = getFirestore();
        const coleccionItems = base.collection("categorias")

        coleccionItems.get().then((querySnapShot) => {
            if (querySnapShot.size === 0) {
                swal("Información","No se encontraron productos para mostrar", "info")
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