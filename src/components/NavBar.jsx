import React from "react";
import {Link, NavLink} from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () =>{
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid">
                            <Link className="navbar-brand" to={"/"}><img src={"https://gama-sa.com/wp-content/uploads/2014/03/logo-web.png"} alt={"gamaLogo"} width={150}/></Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <div className="navbar-nav">
                                    <NavLink className="nav-link" activeclassname="active" to={"/"}>Productos</NavLink>
                                    <NavLink className="nav-link" activeclassname="active" to={"/categoria/DEPARTAMENTOS"}>Departamentos</NavLink>
                                    <NavLink className="nav-link" activeclassname="active" to={"/categoria/CASAS"}>Casas</NavLink>
                                    <NavLink className="nav-link" activeclassname="active" to={"/categoria/LOCALES"}>Locales</NavLink>
                                    <NavLink className="nav-link" activeclassname="active" to={"/categoria/LOTES"}>Lotes</NavLink>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="col-md-6 d-flex justify-content-end align-items-center">
                    <CartWidget />
                </div>
            </div>
        </div>
    )
}

export default NavBar