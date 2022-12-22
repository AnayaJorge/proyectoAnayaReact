import { BrowserRouter, Routes, Route} from "react-router-dom";
import React from "react";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import DescargaAplicacion from "./components/DescargaAplicacion";
import ItemList from "./components/ItemList";
import Item from "./components/Item";
import Error404 from "./components/Error404";
import CartContextProvider from "./components/context";

function App() {
  return (
     <CartContextProvider>
      <BrowserRouter>
        <div className="container-fluid">
          <NavBar />

          <Routes>
            <Route path={"/"} element={<ItemList />} />
            <Route path={"/categoria/:categoryId"} element={<ItemList />} />
            <Route path={"/item/:id"} element={<Item />} />
            <Route path={"*"} element={<Error404 />} />
          </Routes>
            
          <DescargaAplicacion />
          <Footer />
          
        </div>
      </BrowserRouter>
    </CartContextProvider> 
  );
}

export default App;