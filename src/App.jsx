import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import DescargaAplicacion from "./components/DescargaAplicacion";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Error404 from "./components/Error404";
import CartContextProvider from "./components/context/CartContext";
import Cart from "./components/Cart";
import Checkout from  "./components/Checkout"
import Thanks from "./components/Thanks";

function App() {
  return (
    <CartContextProvider>
      <div className="container-fluid">
        <BrowserRouter>    
          <NavBar />
          <Routes>
            <Route path={"/"} element={<ItemListContainer />} />
            <Route path={"/categoria/:id"} element={<ItemListContainer />} />
            <Route path={"/item/:id"} element={<ItemDetailContainer />} />
            <Route path={"/cart"} element={<Cart />} />
            <Route path={"/checkout"} element={<Checkout />} />
            <Route path={"/Thanks/:id"} element={<Thanks />} />
            <Route path={"*"} element={<Error404 />} />
          </Routes>
          <DescargaAplicacion />
          <Footer />
        </BrowserRouter>
      </div>
    </CartContextProvider> 
  );
}

export default App;