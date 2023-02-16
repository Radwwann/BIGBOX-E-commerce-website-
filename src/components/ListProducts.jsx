import userEvent from "@testing-library/user-event";
import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import data from "../data";

const ListProducts = ({product}) => {
  const { products, setProducts } = useContext(ProductContext);

    const handleClick =  (id) => {
        const product = data.find(item => item.id === id)
        setProducts([...products, product])
        console.log(products)
    }



  return (
    <>
    <div className="col-lg-3 col-md-6 col-sm-6">
      <figure className="card card-product-grid">
        <div className="img-wrap">
          <img src="./images/items/1.webp" />
        </div>
        <figcaption className="info-wrap border-top">
          <div className="price-wrap">
            <span className="price">{product.price}</span>
          </div>
          <p className="title mb-2">{product.product_name}</p>

          <a href="#" className="btn btn-primary" onClick={()=> handleClick(product.id)}>
            Add to cart
          </a>
          <a href="#" className="btn btn-light btn-icon">
            {" "}
            <i className="fa fa-heart"></i>{" "}
          </a>
        </figcaption>
      </figure>
    </div>
    </>
  );
};

export default ListProducts;
