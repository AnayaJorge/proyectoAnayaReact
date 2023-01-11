import React, { useContext} from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "./context/CartContext";

const ItemDetail = ({item}) => {
    const {addItem} = useContext (CartContext);
    
    
    /*
    import { useParams } from "react-router-dom";

    const {cart} = useContext (CartContext);
    
    const {id} = useParams();
    
    const isInCart = () => {
        return cart.some ( x => x.id === id)
    }

    const stockReal = (id) => {
        if (isInCart (id)) {
            let pos = cart.findIndex ( x => x.id === id);
            let cantidadReal = (cart[pos].quantity);
            console.log("cantidad real :" + cantidadReal)
        }
    }*/


    const onAdd = (quantity) => {
        addItem (item, quantity); 
    }

    return (
        <div className="row my-5 justify-content-center">
            <div className="card col-md-6 p-2 text-center">
                <img src={item.imagen} className="img-fluid" alt={item.nombre} />
                <h1>{item.nombre}</h1>
                <p>Tipología: {item.tipologia}</p>
                <p>{item.descripcion}</p>
                <p><b>USD {item.precio}</b></p>
                <p><b>Stock: </b>{item.stock}</p>
                <ItemCount stock={item.stock} onAdd={onAdd}/> 
            </div>
        </div>
    )
}

export default ItemDetail;