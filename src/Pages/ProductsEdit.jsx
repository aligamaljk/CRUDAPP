import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const ProductsEdit = () => {
  const url = "http://localhost:9000/products";
  const { productEditId } = useParams();
  const [product, setProduct] = useState({});
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [taxes, setTaxes] = useState("");
  const [ads, setAds] = useState("");
  const [discount, setDiscount] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const getProduct = () => {
    axios(`${url}/${productEditId}`).then((res) => setProduct(res.data));
  };
  function handleImage(e) {
    setImage(e.target.files[0]);
  }
  const formSumit = (e) => {
    e.preventDefault();
    axios
      .put(`${url}/${productEditId}`, {
        image: URL.createObjectURL(image),
        title: title,
        price: price,
        taxes: taxes,
        ads: ads,
        discount: discount,
        description: description,
        category: category,
      })
      .then((data) => {
        console.log(data.data);
      });
  };
  useEffect(() => {
    getProduct();
  }, []);
  return (
    <>
      <div className="curd">
        <div className="inputs ">
          <h1 className="section-title">Edit Product ({productEditId})</h1>
          <div className="container">
            <form key={product.id} onSubmit={formSumit}>
              <div className="mb-3">
                <div className="img">
                  {image ? (
                    <img src={URL.createObjectURL(image)} alt="" />
                  ) : (
                    <img src={product.image} alt="" />
                  )}
                  <label htmlFor="productImage" className="productImage">
                    Product Image
                  </label>
                  <input
                    className="form-control"
                    style={{ height: "100%" }}
                    type="file"
                    name="file"
                    onChange={handleImage}
                  />
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="ProductTitle">Title:</label>
                <input
                  className="form-control"
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                  placeholder="title"
                  type="text"
                  id="title"
                  defaultValue={product.title}
                />
              </div>
              <div className="mb-3">
                <div className="price">
                  <label htmlFor="ProductPrice">Price:</label>
                  <input
                    className="form-control"
                    onChange={(e) => {
                      setPrice(e.target.value);
                    }}
                    placeholder="price"
                    id="price"
                    type="number"
                    defaultValue={product.price}
                  />
                  <label htmlFor="ProductTaxes">Taxes:</label>
                  <input
                    className="form-control"
                    onChange={(e) => {
                      setTaxes(e.target.value);
                    }}
                    placeholder="taxes"
                    id="taxes"
                    type="number"
                    defaultValue={product.taxes}
                  />
                  <label htmlFor="ProductAds">Ads:</label>
                  <input
                    className="form-control"
                    onChange={(e) => {
                      setAds(e.target.value);
                    }}
                    placeholder="ads"
                    id="ads"
                    type="number"
                    defaultValue={product.ads}
                  />
                  <label htmlFor="ProductDiscount">Discount:</label>
                  <input
                    className="form-control"
                    onChange={(e) => {
                      setDiscount(e.target.value);
                    }}
                    placeholder="discount"
                    id="discount"
                    type="number"
                    defaultValue={product.discount}
                  />
                </div>
                <small id="total">Totil: </small>
              </div>
              <input
                className="form-control"
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                placeholder="description"
                type="text"
                id="description"
                defaultValue={product.description}
              />
              <input
                className="form-control"
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
                placeholder="category"
                type="text"
                id="category"
                defaultValue={product.category}
              />
              <button type="submit" className="btn btn-primary">
                Update Product
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsEdit;
