import React, { useState } from "react";
import  { Link } from 'react-router-dom';
import data from "../data";

const Header = () => {

    const [search, setSearch] = useState('');
    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    const filterProduct = () => {
        data.filter(item => item.product_name.toLowerCase().includes(search.toLowerCase()))
    }
  return (
    <header className="section-header">
      <section className="header-main">
        <div className="container">
          <div className="row gy-3 align-items-center">
            <div className="col-lg-2 col-sm-4 col-4">
              <a href="/" className="navbar-brand">
                BigBox
              </a>
            </div>
            <div className="order-lg-last col-lg-5 col-sm-8 col-8">
              <div className="float-end">
                <a href="#" className="btn btn-light">
                  <i className="fa fa-user"></i>{" "}
                  <span className="ms-1 d-none d-sm-inline-block">Sign in </span>
                </a>
                <a href="#" className="btn btn-light">
                  <i className="fa fa-heart"></i>{" "}
                  <span className="ms-1 d-none d-sm-inline-block">Wishlist</span>
                </a>
                <a
                  data-bs-toggle="offcanvas"
                  href="#offcanvas_cart"
                  className="btn btn-light"
                >
                  <i className="fa fa-shopping-cart"></i>{" "}
                  <span className="ms-1">My cart </span>
                </a>
              </div>
            </div>
            <div className="col-lg-5 col-md-12 col-12">
              <form action="#" className="">
                <div className="input-group">
                  <input
                    type="search"
                    className="form-control"
                    style={{ width: "55%" }}
                    placeholder="Search"
                    onChange={handleChange}
                  />
                  <select className="form-select">
                    <option value="">All type</option>
                    <option value="codex">Special</option>
                    <option value="comments">Only best</option>
                    <option value="content">Latest</option>
                  </select>
                  <button className="btn btn-primary">
                    <i className="fa fa-search"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <nav className="navbar navbar-light bg-white border-top navbar-expand-lg">
        <div className="container">
          <button
            className="navbar-toggler border"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar_main"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbar_main">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <Link
                  className="dropdown-toggle nav-link"
                  href="#"
                  data-bs-toggle="dropdown"
                >
                  Laptops
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    {" "}
                    <Link className="dropdown-item" href="#">
                      HP{" "}
                    </Link>{" "}
                  </li>
                  <li>
                    {" "}
                    <Link className="dropdown-item" href="#">
                      DELL
                    </Link>{" "}
                  </li>
                  <li>
                    {" "}
                    <Link className="dropdown-item" href="#">
                      TOSHIBA
                    </Link>{" "}
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="dropdown-toggle nav-link"
                  href="#"
                  data-bs-toggle="dropdown"
                >
                  Phones
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    {" "}
                    <Link className="dropdown-item" href="#">
                      iPhone{" "}
                    </Link>{" "}
                  </li>
                  <li>
                    {" "}
                    <Link className="dropdown-item" href="#">
                      Samsung
                    </Link>{" "}
                  </li>
                  <li>
                    {" "}
                    <Link className="dropdown-item" href="#">
                      Techno
                    </Link>{" "}
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#">
                  Sales
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#">
                 About Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
