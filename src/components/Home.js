import { React, useEffect, useState } from "react";
import "./home.css";
import { Link } from "react-router-dom";
import HomeProducts from "./Home_products";
import { AiFillEye, AiFillHeart, AiOutlineShoppingCart } from "react-icons/ai";
import {
  BiLogoFacebook,
  BiLogoTwitter,
  BiLogoInstagram,
  BiLogoYoutube,
} from "react-icons/bi";

const Home = ({ addToCart }) => {
  // Trending Product
  const [trendingProduct, setTrendingProduct] = useState(HomeProducts);
  // Product Category
  const [newProduct, setNewProduct] = useState([]);
  const [featuredProduct, setFeaturedProduct] = useState([]);
  const [topProduct, setTopProduct] = useState([]);

  const filterProducts = (ele) => {
    if (ele === "all") {
      // All the trending products
      setTrendingProduct(HomeProducts);
    } else {
      // filter of the trending products
      const filterProduct = HomeProducts.filter((product) => {
        return product.type === ele;
      });
      setTrendingProduct(filterProduct);
    }
  };

  const productCategory = () => {
    const newCategory = HomeProducts.filter((x) => {
      return x.type === "new";
    });
    const featuredCategory = HomeProducts.filter((x) => {
      return x.type === "featured";
    });
    const topCategory = HomeProducts.filter((x) => {
      return x.type === "top";
    });

    setNewProduct(newCategory);
    setFeaturedProduct(featuredCategory);
    setTopProduct(topCategory);
  };

  useEffect(() => {
    productCategory();
  }, []);

  return (
    <>
      <div className="home">
        <div className="top-home">
          <div className="content">
            <h3>Silver Aluminum</h3>
            <h2>Apple Watch</h2>
            <p>30% Off at your first order</p>
            <Link to="/shop" className="btn">
              Shop Now
            </Link>
          </div>
        </div>
        <div className="trending">
          <div className="container">
            <div className="left-box">
              <div className="header">
                <h2 onClick={() => filterProducts("all")}>trending product</h2>
                <div className="right-heading">
                  <h3 onClick={() => filterProducts("new")}>new</h3>
                  <h3 onClick={() => filterProducts("featured")}>featured</h3>
                  <h3 onClick={() => filterProducts("top")}>top_selling</h3>
                </div>
              </div>
              <div className="products">
                {trendingProduct.map((product) => {
                  return (
                    <>
                      <div className="box" key={product.id}>
                        <div className="img-box">
                          <img src={product.image} alt="update"></img>
                          <div className="icon">
                            <div className="icon-box">
                              <AiFillEye />
                            </div>
                            <div className="icon-box">
                              <AiFillHeart />
                            </div>
                          </div>
                        </div>
                        <div className="info">
                          <h4>{product.Name}</h4>
                          <p>${product.price}</p>
                        </div>
                        <div className="btn-cart">
                          <button
                            className="btn"
                            onClick={() => addToCart(product)}
                          >
                            Add To Cart
                          </button>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
              <div className="btn-show">
                <button className="btn">Show More</button>
              </div>
            </div>
            <div className="right-box">
              <div className="testimonial">
                <div className="header">
                  <h3>our testimonial</h3>
                </div>
                <div className="details">
                  <div className="img-box">
                    <img src="images/T1.avif" alt="testimonial"></img>
                  </div>
                  <div className="info">
                    <h3>stephan robot</h3>
                    <h4>Web Designer</h4>
                    <p>
                      Lorem ipsum, dolor sit consectetur sit quod in aut quasi
                      fugit dolores aut iri sint alias .
                    </p>
                  </div>
                </div>
              </div>
              <div className="newsLetter">
                <div className="header">
                  <h3>news Letter</h3>
                </div>
                <div className="form">
                  <p>join our mailing list</p>
                  <input type="email" placeholder="E-mail" autoComplete="off" />
                  <div className="btn-box">
                    <button className="btn">subscribe</button>
                  </div>
                  <div className="icon-box">
                    <div className="icon">
                      <BiLogoFacebook />
                    </div>
                    <div className="icon">
                      <BiLogoTwitter />
                    </div>
                    <div className="icon">
                      <BiLogoInstagram />
                    </div>
                    <div className="icon">
                      <BiLogoYoutube />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="product-type">
          <div className="container">
            <div className="main-box">
              <div className="header">
                <h2>New Product</h2>
              </div>
              {newProduct.map((ele) => {
                return (
                  <>
                    <div className="box">
                      <div className="img-box">
                        <img src={ele.image} alt="newCate"></img>
                      </div>
                      <div className="info">
                        <h3>{ele.Name}</h3>
                        <p>${ele.price}</p>
                        <div className="icon">
                          <button className="btn">
                            <AiFillEye />
                          </button>
                          <button className="btn">
                            <AiFillHeart />
                          </button>
                          <button
                            className="btn"
                            onClick={() => addToCart(ele)}
                          >
                            <AiOutlineShoppingCart />
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
            <div className="main-box">
              <div className="header">
                <h2>Featured Product</h2>
              </div>
              {featuredProduct.map((ele) => {
                return (
                  <>
                    <div className="box">
                      <div className="img-box">
                        <img src={ele.image} alt="newCate"></img>
                      </div>
                      <div className="info">
                        <h3>{ele.Name}</h3>
                        <p>${ele.price}</p>
                        <div className="icon">
                          <button className="btn">
                            <AiFillEye />
                          </button>
                          <button className="btn">
                            <AiFillHeart />
                          </button>
                          <button
                            className="btn"
                            onClick={() => addToCart(ele)}
                          >
                            <AiOutlineShoppingCart />
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
            <div className="main-box">
              <div className="header">
                <h2>Top Product</h2>
              </div>
              {topProduct.map((ele) => {
                return (
                  <>
                    <div className="box">
                      <div className="img-box">
                        <img src={ele.image} alt="newCate"></img>
                      </div>
                      <div className="info">
                        <h3>{ele.Name}</h3>
                        <p>${ele.price}</p>
                        <div className="icon">
                          <button className="btn">
                            <AiFillEye />
                          </button>
                          <button className="btn">
                            <AiFillHeart />
                          </button>
                          <button className="btn">
                            <AiOutlineShoppingCart
                              onClick={() => addToCart(ele)}
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
