import React, { useState, useEffect } from "react";
import {Link, useParams} from "react-router-dom";
/*import arrayProductos from "./jason/arrayProductos.json";*/

const ItemList = () => {
    const [items, setItem] = useState([]);
    const {categoryId} = useParams();
    

    // Promesa que accede a un array 
    /*useEffect(() =>{
        const promesa = new Promise ((resolve) => {
            setTimeout (()=>{
                resolve(categoryId ? arrayProductos.filter(item => item.categoria === categoryId) : arrayProductos);
            },2000);
        });

        promesa.then((data)=> {
            setItem(data);
        });
    },[categoryId]);*/



    return (
        <div className="container">
            <div className="row">
                {
                    items.map(item => 
                        <div className="col-md-4 mb-3" key={item.id}>
                            <div className="card text-center">
                                <Link to={"/item/" + item.id} className="text-decoration-none text-dark">
                                    <img src={item.imagen} className="card-img-top" alt={item.nombre} />
                                    <div className="card-body">
                                        <p className="card-text">{item.nombre}</p>
                                        <p className="card-text"><b>${item.precio}</b></p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
        
    )
}

export default ItemList