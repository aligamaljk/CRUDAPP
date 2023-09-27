import React, { useState } from "react";
import axios from "axios";
import Image1 from "../image/upload-1118929_960_720.png";
const ProductAdd = () => {
  const url = "http://localhost:9000/products";
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [taxes, setTaxes] = useState("");
  const [ads, setAds] = useState("");
  const [discount, setDiscount] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  // const inputRef = useRef(null);
  // //   console.log(title, price, taxes, ads, discount, category);

  // const handleImageClick = () => {
  //   inputRef.current.Click();
  // };

  function handleImage(e) {
    setImage(e.target.files[0]);
  }
  const formSumit = (e) => {
    e.preventDefault();
    axios
      .post(url, {
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
  return (
    <>
      <div className="curd">
        <div className="inputs ">
          <div className="title">
            <h1>Add Product</h1>
            <p>PRODUCT MANAGEMENT SYSTEM</p>
          </div>
          <div className="container">
            <form onSubmit={formSumit}>
              <div className="mb-3">
                <div className="img">
                  {image ? (
                    <img src={URL.createObjectURL(image)} alt="" />
                  ) : (
                    <img src={Image1} alt="" />
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
                />
              </div>
              <div className="mb-3">
                <label htmlFor="ProductPrice">Price:</label>
                <div className="price">
                  <input
                    className="form-control"
                    onChange={(e) => {
                      setPrice(e.target.value);
                    }}
                    placeholder="price"
                    id="price"
                    type="number"
                  />
                  <input
                    className="form-control"
                    onChange={(e) => {
                      setTaxes(e.target.value);
                    }}
                    placeholder="taxes"
                    id="taxes"
                    type="number"
                  />
                  <input
                    className="form-control"
                    onChange={(e) => {
                      setAds(e.target.value);
                    }}
                    placeholder="ads"
                    id="ads"
                    type="number"
                  />
                  <input
                    className="form-control"
                    onChange={(e) => {
                      setDiscount(e.target.value);
                    }}
                    placeholder="discount"
                    id="discount"
                    type="number"
                  />
                  <small id="total">Totil: </small>
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="ProductDescription">Description:</label>
                <input
                  className="form-control"
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                  placeholder="description"
                  type="text"
                  id="description"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="ProductCategory">Category:</label>
                <input
                  className="form-control"
                  onChange={(e) => {
                    setCategory(e.target.value);
                  }}
                  placeholder="category"
                  type="text"
                  id="category"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Add Product
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductAdd;
