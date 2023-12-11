import { React, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import HomeProducts from "./components/Home_products";
// import GlobalContext from "./components/context/GlobalContext";

function App() {
  // Shop
  const [shop, setShop] = useState(HomeProducts);
  // Header(Search on Products)
  const [search, setSearch] = useState("");
  const searchProduct = () => {
    if ((search || []).length === 0) {
      alert("Please Search Something !");
      setShop(HomeProducts);
    } else {
      const searchFilter = HomeProducts.filter((x) => {
        return x.cat === search;
      });
      // if search on product not found
      if (searchFilter.length === 0) {
        alert("Not Found, Please Search Again");
        setShop(HomeProducts);
      } else {
        setShop(searchFilter);
      }
    }
  };
  // Add To Cart
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    let addOrNot = cart.find((x) => {
      return x.id === product.id;
    });
    if (addOrNot) {
      alert("already added");
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
      alert("added to cart");
    }
  };
  console.log(cart);

  return (
    <Router>
      <Header
        search={search}
        setSearch={setSearch}
        searchProduct={searchProduct}
      />
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route
          path="/shop"
          element={<Shop shop={shop} setShop={setShop} addToCart={addToCart} />}
        />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
