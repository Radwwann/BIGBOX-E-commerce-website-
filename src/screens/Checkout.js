import React from "react";
import { Link } from "react-router-dom";

const Checkout = () => {
  return (
    <div>
      <section className="bg-primary padding-y-sm">
        <div className="container">
          <ol className="breadcrumb ondark mb-0">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Shopping Cart
            </li>
          </ol>
        </div>
      </section>

      <section class="section-content padding-y">
        <div class="container">
          <div class="row">
            <main class="col-md-9">
              <div class="card">
                <table class="table table-borderless table-shopping-cart">
                  <thead class="text-muted">
                    <tr class="small text-uppercase">
                      <th scope="col">Product</th>
                      <th scope="col" width="120">
                        Quantity
                      </th>
                      <th scope="col" width="120">
                        Price
                      </th>
                      <th scope="col" class="text-right" width="200">
                        {" "}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <figure class="itemside">
                          <div class="aside">
                            <img
                              src="assets/images/items/1.jpg"
                              class="img-sm"
                            />
                          </div>
                          <figcaption class="info">
                            <a href="#" class="title text-dark">
                              Some name of item goes here nice
                            </a>
                            <p class="text-muted small">
                              Size: XL, Color: blue, <br /> Brand: Gucci
                            </p>
                          </figcaption>
                        </figure>
                      </td>
                      <td>
                        <select class="form-control">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                        </select>
                      </td>
                      <td>
                        <div class="price-wrap">
                          <var class="price">$1156.00</var>
                          <small class="text-muted"> $315.20 each </small>
                        </div>
                      </td>
                      <td class="text-right">
                        <a
                          data-original-title="Save to Wishlist"
                          title=""
                          href=""
                          class="btn btn-light mr-2"
                          data-toggle="tooltip"
                        >
                          {" "}
                          <i class="fa fa-heart"></i>
                        </a>
                        <a href="" class="btn btn-light">
                          {" "}
                          Remove
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <figure class="itemside">
                          <div class="aside">
                            <img
                              src="assets/images/items/2.jpg"
                              class="img-sm"
                            />
                          </div>
                          <figcaption class="info">
                            <a href="#" class="title text-dark">
                              Product name goes here nice
                            </a>
                            <p class="text-muted small">
                              Size: XL, Color: blue, <br /> Brand: Gucci
                            </p>
                          </figcaption>
                        </figure>
                      </td>
                      <td>
                        <select class="form-control">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                        </select>
                      </td>
                      <td>
                        <div class="price-wrap">
                          <var class="price">$149.97</var>
                          <small class="text-muted"> $75.00 each </small>
                        </div>
                      </td>
                      <td class="text-right">
                        <a
                          data-original-title="Save to Wishlist"
                          title=""
                          href=""
                          class="btn btn-light mr-2"
                          data-toggle="tooltip"
                        >
                          {" "}
                          <i class="fa fa-heart"></i>
                        </a>
                        <a href="" class="btn btn-light btn-round">
                          {" "}
                          Remove
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <figure class="itemside">
                          <div class="aside">
                            <img
                              src="assets/images/items/3.jpg"
                              class="img-sm"
                            />
                          </div>
                          <figcaption class="info">
                            <a href="#" class="title text-dark">
                              Another name of some product goes just here
                            </a>
                            <p class="small text-muted">
                              Size: XL, Color: blue, Brand: Tissot
                            </p>
                          </figcaption>
                        </figure>
                      </td>
                      <td>
                        <select class="form-control">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                        </select>
                      </td>
                      <td>
                        <div class="price-wrap">
                          <var class="price">$98.00</var>
                          <small class="text-muted"> $578.00 each</small>
                        </div>
                      </td>
                      <td class="text-right">
                        <a
                          data-original-title="Save to Wishlist"
                          title=""
                          href=""
                          class="btn btn-light mr-2"
                          data-toggle="tooltip"
                        >
                          {" "}
                          <i class="fa fa-heart"></i>
                        </a>
                        <a href="" class="btn btn-light btn-round">
                          {" "}
                          Remove
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <div class="card-body border-top">
                  <a href="#" class="btn btn-primary float-md-right">
                    {" "}
                    Make Purchase <i class="fa fa-chevron-right"></i>{" "}
                  </a>
                  <a href="#" class="btn btn-light">
                    {" "}
                    <i class="fa fa-chevron-left"></i> Continue shopping{" "}
                  </a>
                </div>
              </div>

              <div class="alert alert-success mt-3">
                <p class="icontext">
                  <i class="icon text-success fa fa-truck"></i> Free Delivery
                  within 1-2 weeks
                </p>
              </div>
            </main>
            <aside class="col-md-3">
              <div class="card">
                <div class="card-body">
                  <dl class="dlist-align">
                    <dt>Total price:</dt>
                    <dd class="text-right">USD 568</dd>
                  </dl>
                  <dl class="dlist-align">
                    <dt>Shipping Fee:</dt>
                    <dd class="text-right">USD 25</dd>
                  </dl>
                      <dl class="dlist-align">
                    <dt>Tax:</dt>
                    <dd class="text-right">% 11</dd>
                  </dl>
                  <dl class="dlist-align">
                    <dt>Discount:</dt>
                    <dd class="text-right">% 25</dd>
                  </dl>
                  <dl class="dlist-align">
                    <dt>Total:</dt>
                    <dd class="text-right  h5">
                      <strong>$1,650</strong>
                    </dd>
                  </dl>
                  <hr />
                  <p class="text-center mb-3">
                    <img src="images/payments.webp" height="26" />
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Checkout;
