import React, { useContext } from "react";
import {CartContext} from "./context/CartContext"
import { Link } from "react-router-dom";

const Cart = () => {
    const {cart, removeItem, sumTotal, clear, cartTotal} = useContext(CartContext)
    
    if (cartTotal() === 0) {
        return (
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-12 text-center">
                    <div className="alert alert-danger" role="alert">El Carrito se encuentra vacio</div>
                    <Link to={"/"} className="btn btn-secondary">Página principal</Link>
                    </div>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-12 text-center">
                    <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col" className="text-end" colSpan={5}><button type="button" className="btn btn-secondary" onClick={clear}>Vaciar Carrito</button></th>
                                </tr>
                                <tr>
                                    <th scope="col">&nbsp;</th>
                                    <th scope="col">Producto</th>
                                    <th scope="col" className="text-center">Cantidad</th>
                                    <th scope="col" className="text-center">Precio</th>
                                    <th scope="col">&nbsp;</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map(item => (
                                    <tr key={item.id}>
                                        <td><img src={item.imagen} alt={item.nombre} width={64} /></td>
                                        <td className="align-middle">{item.nombre}</td>
                                        <td className="text-center align-middle">{item.quantity}</td>
                                        <td className="text-center align-middle">USD {item.quantity * item.precio}</td>
                                        <td className="text-center align-middle"><Link onClick={() => {removeItem(item.id)}} title="Eliminar Producto"><img src={"images/trash-fill.svg"} alt={"Eliminar Producto"} width={24} /></Link></td>
                                    </tr>
                                ))}
                                <tr>
                                    <td colSpan={2}>&nbsp;</td>
                                    <td className="text-center"><b>Suma Total</b></td>
                                    <td className="text-center"><b>USD {sumTotal()}</b></td>
                                    <td>&nbsp;</td>
                                </tr>
                                
                                <tr>
                                    <th scope="col" className="text-end" colSpan={5}><Link to={"/checkout"} className="btn btn-secondary">Cerrar Compra</Link></th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
export default Cart
