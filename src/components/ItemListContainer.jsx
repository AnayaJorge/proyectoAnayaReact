import React, { useState, useEffect } from "react";
import {useParams} from "react-router-dom";
import ItemList from "./ItemList";
//import arrayProductos from "./json/arrayProductos.json";
import { /*addDoc,*/ collection, getDocs, getFirestore, query, where, /*limit*/ } from "firebase/firestore";
import Loading from "./Loading";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const {id} = useParams();
    

// Promesa que accede a un array 
    /*useEffect(() =>{
        const promesa = new Promise ((resolve) => {
            setTimeout (()=>{
                resolve(categoryId ? arrayProductos.filter(item => item.categoria === categoryId) : arrayProductos);
            },2000);
        });

        promesa.then((data)=> {
            setItems(data);
        });
    },[categoryId]);*/

// Inserto los Productos de mi JSON a FireStore
    /*useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");
        arrayProductos.forEach((item) => {
            addDoc(itemsCollection, item);
        });
    }, []);*/


// Consultar la Collection de mis Productos
    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");
        //Filtro los Documento con una condición
        //const q = query(itemsCollection, where("categoria", "==", "lotes"), limit(5));

        //Filtrar en base al id de la pagina
        const q = id ? query(itemsCollection, where("categoria", "==", id)) : itemsCollection;
        getDocs(q).then((snapShot) => {
            setItems(snapShot.docs.map((doc) => ({id:doc.id, ...doc.data()})));
            setLoading(false);
        });
    }, [id]);



    return (
        <div className="container mb-5">
            {loading ? <Loading /> : <ItemList items={items} />}
        </div>
        
    )
}

export default ItemListContainer