import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const url = "http://localhost:9000/products";
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios(url).then((res) => setProducts(res.data));
  }, []);
  return (
    <>
      <div className="section-title">shop products</div>
      <div className="container">
        <div className="shop-content">
          {products.map((product) => (
            <div key={product.id} className="products-box">
              <div>
                <img src={product.image} alt="" className="product-img" />
                <h2 className="product-title">{product.title}</h2>
                <div className="description">{product.description}</div>
                <div className="info">
                  <span className="price box">Price: ${product.price} </span>
                  <Link
                    to={`/product/${product.id}`}
                    className="btn box price "
                  >
                    Details
                  </Link>
                  <button className="btn box price">Shop</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
