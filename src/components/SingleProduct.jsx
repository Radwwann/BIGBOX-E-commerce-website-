import React from 'react'

const SingleProduct = () => {
  return (
    <section className="padding-y">
    <div className="container">
      <div className="row">
        <aside className="col-lg-6">
          <article className="gallery-wrap">
            <div className="img-big-wrap img-thumbnail">
              <a
                data-fslightbox="mygalley"
                data-type="image"
                href="./images/items/10.webp"
              >
                <img height="560" src="https://consumer.huawei.com/content/dam/huawei-cbg-site/me-africa/lb/mkt/plp/laptops/list-d14.jpg" alt="" />
              </a>
            </div>
          </article>
        </aside>
        <main className="col-lg-6">
          <article className="ps-lg-3">
            <h4 className="title text-dark">
              Hp Pavion{" "}
            </h4>
            <div className="rating-wrap my-3">
              <ul className="rating-stars">
                <li style={{ width: "80%" }} className="stars-active">
                  {" "}
                  <img src="./images/misc/stars-active.svg" alt="" />{" "}
                </li>
                <li>
                  {" "}
                  <img src="./images/misc/starts-disable.svg" alt="" />{" "}
                </li>
              </ul>
              <b className="label-rating text-warning"> 4.5</b>
              <i className="dot"></i>
              <span className="label-rating text-muted">
                {" "}
                <i className="fa fa-shopping-basket"></i> 154 orders{" "}
              </span>
              <i className="dot"></i>
              <span className="label-rating text-success">In stock</span>
            </div>

            <div className="mb-3">
              <var className="price h5">$999.00</var>
              <span className="text-muted">/per box</span>
            </div>

            <dl className="row">
              <dt className="col-3">Avaibility:</dt>
              <dd className="col-9">32 in Stock </dd>

              <dt className="col-3">Brand</dt>
              <dd className="col-9">HP</dd>
            </dl>

            <hr />

            <div className="row mb-4">
              <div className="col-md-4 col-6 mb-3">
                <label className="form-label d-block">Quantity</label>
                <div className="input-group input-spinner">
                  <button className="btn btn-icon btn-light" type="button">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      fill="#999"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 13H5v-2h14v2z"></path>
                    </svg>
                  </button>
                  <input
                    className="form-control text-center"
                    placeholder=""
                    value="14"
                  />
                  <button className="btn btn-icon btn-light" type="button">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      fill="#999"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <a href="#" className="btn  btn-warning">
              {" "}
              Buy now{" "}
            </a>
            <a href="#" className="btn  btn-primary">
              {" "}
              <i className="me-1 fa fa-shopping-basket"></i> Add to cart{" "}
            </a>
            <a href="#" className="btn  btn-light">
              {" "}
              <i className="me-1 fa fa-heart"></i> Save{" "}
            </a>
          </article>
        </main>
      </div>
    </div>
  </section>
  )
}

export default SingleProduct
