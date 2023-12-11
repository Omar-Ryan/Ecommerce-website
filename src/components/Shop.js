import { React, useState } from "react";
import "./shop.css";
import HomeProducts from "./Home_products";
import { AiFillEye, AiFillHeart, AiOutlineClose } from "react-icons/ai";

const Shop = ({ shop, setShop, addToCart }) => {
  const catFilter = (ele) => {
    const shopProduct = HomeProducts.filter((product) => {
      return product.cat === ele;
    });
    setShop(shopProduct);
  };
  // All products
  const allCatFilter = () => {
    setShop(HomeProducts);
  };
  // Show details for product
  const [showDetail, setShowDetail] = useState(false);
  const [detail, setDetail] = useState([]);

  const detailOfProduct = (product) => {
    const detailContent = [{ product }][0]["product"];
    setDetail(detailContent);
    setShowDetail(true);
  };
  const closeDetail = () => {
    setShowDetail(false);
  };

  return (
    <>
      {showDetail ? (
        <>
          <div className="product-detail">
            <button className="close-btn" onClick={closeDetail}>
              <AiOutlineClose />
            </button>
            <div className="container">
              <div className="img-box">
                <img src={detail.image} alt="showDetails"></img>
              </div>
              <div className="info">
                <h4># {detail.cat}</h4>
                <h2>{detail.Name}</h2>
                <p>
                  Lorem ipsum, dolor sit amat, qui quasi quam Et culpa quae ut
                  provident cum sed.... .
                </p>
                <h3>${detail.price}</h3>
                <button className="btn" onClick={() => addToCart(detail)}>
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </>
      ) : null}
      <div className="shop">
        <h2 className="head-page"># SHOP</h2>
        <p>Home .Shop</p>
        <div className="container">
          <div className="left-box">
            <div className="category">
              <div className="header">
                <h3>All Category</h3>
              </div>
              <div className="box">
                <ul>
                  <li onClick={() => allCatFilter()}># all</li>
                  <li onClick={() => catFilter("electronics")}># electronic</li>
                  <li onClick={() => catFilter("headphone")}># headphone</li>
                  <li onClick={() => catFilter("laptop")}># laptop</li>
                  <li onClick={() => catFilter("phone")}># phone</li>
                  <li onClick={() => catFilter("speaker")}># speaker</li>
                  <li onClick={() => catFilter("tv")}># tv</li>
                  <li onClick={() => catFilter("watch")}># watch</li>
                </ul>
              </div>
            </div>
            <div className="banner">
              <div className="img-box">
                <img src="images/shop_left.avif" alt="shop"></img>
              </div>
            </div>
          </div>
          <div className="right-box">
            <div className="banner">
              <div className="img-box">
                <img src="images/shop_top.webp" alt="shop"></img>
              </div>
            </div>
            <div className="product-box">
              <h2>shop product</h2>
              <div className="product-content">
                {shop.map((Ele) => {
                  return (
                    <>
                      <div className="box">
                        <div className="img-box">
                          <img src={Ele.image} alt="shop"></img>
                          <div className="icon">
                            <ul>
                              <li onClick={() => detailOfProduct(Ele)}>
                                <AiFillEye />
                              </li>
                              <li>
                                <AiFillHeart />
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="details">
                          <h3>{Ele.Name}</h3>
                          <p>${Ele.price}</p>
                          <button
                            className="btn"
                            onClick={() => addToCart(Ele)}
                          >
                            Add To Cart
                          </button>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
