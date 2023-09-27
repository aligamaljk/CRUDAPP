import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const ProductsDetailse = () => {
  const url = "http://localhost:9000/products";
  const [product, setProduct] = useState({});
  const { productId } = useParams();
  useEffect(() => {
    fetch(`${url}/${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [productId]);
  // console.log(product);
  return (
    <div className="product">
      <div
        className="card"
        style={{
          width: "80%",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button className="btn btn-secondary" style={{ margin: "10px auto" }}>
          ID: {product.id}
        </button>
        <img src={product.image} className="card-img-top" alt="" />
        <div className="card-body">
          <h3 className="card-title">{product.category}</h3>
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">{product.description}</p>
          <button className="btn btn-secondary">price: ${product.price}</button>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetailse;
