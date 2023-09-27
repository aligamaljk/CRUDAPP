import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <ul className="list-unstyled">
        <li>
          <Link to={`/`}>E-commerce</Link>
        </li>
        <li>
          <Link to={`/products`}>Get All Products</Link>
        </li>
        <li>
          <Link to="/gateogries">Get All Gateogries</Link>
        </li>
      </ul>
    </>
  );
};

export default Sidebar;
