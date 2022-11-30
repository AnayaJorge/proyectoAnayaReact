import React from "react";
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import DescargaAplicacion from "./components/DescargaAplicacion";

function App() {
  return (
    <div className="container-fluid">
      <NavBar />
      <ItemListContainer greeting={"No se encontraton los productos!"}/>
      <DescargaAplicacion />
      <Footer />
    </div>
  );
}

export default App;