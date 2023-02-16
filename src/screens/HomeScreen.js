import React from "react";
import { Link } from "react-router-dom";
import ListProducts from "../components/ListProducts";
import data from "../data";
const HomeScreen = () => {
    
  return (
    <div className="home-section">
      <section className="section-intro">
          <div
            id="carouselExampleSlidesOnly"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="https://cdn.thewirecutter.com/wp-content/media/2022/10/laptopstopicpage-2048px-2102-2x1-1.jpg?auto=webp&quality=60&crop=2:1&width=1024" class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src="https://m.media-amazon.com/images/I/71h6PpGaz9L._AC_SL1500_.jpg" class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src="https://media.wired.com/photos/631bb97dd884b4dcc94164e3/191:100/w_2400,h_1256,c_limit/How-to-Choose-a-Laptop-Gear-GettyImages-1235728903.jpg" class="d-block w-100" alt="..." />
              </div>
            </div>
          </div>
      </section>

      <section className="padding-y">
        <div className="container">
          <header className="section-heading">
            <h3 className="section-title">Laptops</h3>
          </header>
          <div className="row">
            {data.map((product) => (
                <ListProducts key={product.id} product={product} />
            ))}
          </div>
          <header className="section-heading">
          <h3 className="section-title">Phones</h3>
          </header>

        </div>
      </section>
    </div>
  );
};

export default HomeScreen;
