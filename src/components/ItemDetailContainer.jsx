import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
//import arrayProductos from "./jason/arrayProductos.json";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import Loading from "./Loading";

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true);
    const {id} = useParams();

//cargar datos desde un jason
    /*useEffect(() => {
        const promesa = new Promise ((resolve) => {
            setTimeout (() => {
                resolve(arrayProductos.find(item => item.id === parseInt(id)));
            });
        });

        promesa.then((data)=> { 
            setItem(data);
        });
    },[id]);*/

// Cargamos datos desde firebase

    useEffect (() =>{
        const db = getFirestore();
        const documento = doc(db, "items", id);
        getDoc(documento).then((snapShot) => {
            if (snapShot.exists()) {
                setItem({id:snapShot.id, ...snapShot.data()});
                setLoading(false);
            } else {
                console.log("Error! No se encontró el Documento!");
            }
        });
    }, [id])


    return (
        <div className = "container">
            {loading ? <Loading /> : <ItemDetail item={item} />}
        </div>
    )
}

export default ItemDetailContainer;