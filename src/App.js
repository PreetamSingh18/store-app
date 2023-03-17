import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import SingleProduct from "./pages/SingleProduct";
import { Provider } from "react-redux";
import store from "./store/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import ProductPage from "./pages/ProductPage";


const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
        <ToastContainer/>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/products" element={<ProductPage/>}></Route>
            <Route path="/product/:id" element={<SingleProduct />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
};

export default App;
