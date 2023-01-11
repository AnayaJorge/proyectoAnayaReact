import React from "react";
import { Link } from "react-router-dom";

const Item = ({item}) => {
    return (
    
        <div className="card text-center mb-3">
            <Link to={"/item/" + item.id} className="text-decoration-none text-dark">
                <img src={item.imagen} className="card-img-top" alt={item.nombre} />
                <div className="card-body">
                    <p className="card-text">{item.categoria}</p>
                    <p className="card-text">{item.nombre}</p>
                    <p className="card-text"><b>USD {item.precio}</b></p>
                </div>
            </Link>
        </div>
    )
}

export default Item;