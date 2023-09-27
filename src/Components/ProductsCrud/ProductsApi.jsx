import React from "react";
import Navber from "./Navber";
import Sidebar from "./Sidebar";
import { Route, Routes } from "react-router";
import Home from "../../Pages/Home";
import "./Products.css";
import Products from "../../Pages/Products";
import ProductsDetailse from "../../Pages/ProductsDetailse";
import ProductsEdit from "../../Pages/ProductsEdit";
import ProductAdd from "../../Pages/ProductAdd";
import Category from "../../Pages/Category";
import Details from "../../Pages/Details";
const ProductsApi = () => {
  return (
    <>
      <Navber />
      <div className="row ">
        <div className="col-3 sidebar">
          <Sidebar />
        </div>
        <div className="col-9">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:details" element={<Details />} />
            <Route path="products" element={<Products />} />
            <Route path="gateogries" element={<Category />} />
            <Route path="products/add" element={<ProductAdd />} />
            <Route path="products/:productId" element={<ProductsDetailse />} />
            <Route
              path="products/edit/:productEditId"
              element={<ProductsEdit />}
            />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default ProductsApi;
