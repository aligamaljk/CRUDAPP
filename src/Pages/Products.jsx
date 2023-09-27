import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
const Products = () => {
  const url = "http://localhost:9000/products";
  const [products, setProducts] = useState([]);
  const getProducts = () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };
  const ProductDelete = (product) => {
    Swal.fire({
      title: `You are Going To Delete <hr> ${product.title} ?`,
      showCancelButton: true,
    }).then((data) => {
      if (data.isConfirmed) {
        fetch(`${url}/${product.id}`, {
          method: "DELETE",
        }).then((res) => res.json());
        getProducts();
      }
    });
  };
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <div className="products">
        <div className="title">
          <h1>Products Page ({products.length}) </h1>
          <Link to={"/products/add"} className="btn btn-success">
            Add New Product
          </Link>
        </div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Image</th>
              <th>Title</th>
              <th>Description</th>
              <th>Price:</th>
              <th>Operation</th>
            </tr>
          </thead>
          <tbody>
            {products.map((data) => (
              <tr key={data.id}>
                <td>{data.id}</td>
                <td className="img">
                  <img src={data.image} alt="" />
                </td>
                <td>{data.title}</td>
                <td>{data.description}...</td>
                <td>${data.price}</td>
                <td>
                  <button
                    onClick={() => {
                      ProductDelete(data);
                    }}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                  <Link
                    to={`/products/${data.id}`}
                    className="btn btn-info btn-sm"
                  >
                    View
                  </Link>
                  <Link
                    to={`/products/edit/${data.id}`}
                    className="btn btn-primary btn-sm"
                  >
                    Edit
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Products;
