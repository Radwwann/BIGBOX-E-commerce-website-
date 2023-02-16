import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import Product from "./screens/Product";
import Checkout from "./screens/Checkout";
import { ProductProvider } from "./context/ProductContext";

function App() {
  return (
    <>
    <ProductProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Footer />
      </Router>
    </ProductProvider>
    </>
  );
}

export default App;
