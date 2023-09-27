import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const Details = () => {
  const url = "http://localhost:9000/products";
  const [product, setProduct] = useState({});
  const { details } = useParams();
  useEffect(() => {
    axios(`${url}/${details}`).then((res) => setProduct(res.data));
  }, [details]);
  //   console.log(product);
  return (
    <>
      <div className="details">
        <h1 className="section-title">Details Product</h1>
        <div className="container">
          <div key={product.id} className="products-box">
            <div>
              <img
                style={{ width: "15rem" }}
                src={product.image}
                alt=""
                className="product-img"
              />
              <h2 className="product-title">{product.title}</h2>
              <div className="description">{product.description}</div>
              <div
                className="info"
                style={{ justifyContent: "space-around", marginTop: "20px" }}
              >
                <span className="price box">Price: ${product.price} </span>
                <button className="btn box price">Shop</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
