import React from "react";
import "./cart.css";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";

const Cart = ({ cart, setCart }) => {
  // Increase quantity Of Cart Product
  const incqty = (product) => {
    const findProduct = cart.find((x) => {
      return x.id === product.id;
    });
    setCart(
      cart.map((element) => {
        return element.id === product.id
          ? { ...findProduct, qty: findProduct.qty + 1 }
          : element;
      })
    );
  };
  // Decrease quantity Of Cart Product
  const decqty = (product) => {
    const findProduct = cart.find((x) => {
      return x.id === product.id;
    });
    if (findProduct.qty > 0) {
      setCart(
        cart.map((element) => {
          return element.id === product.id
            ? { ...findProduct, qty: findProduct.qty - 1 }
            : element;
        })
      );
    }
  };
  // Removing Cart Product
  const removeProduct = (product) => {
    const findProduct = cart.filter((x) => {
      return x.id !== product.id;
    });
    setCart(findProduct);
  };
  // Total Price
  const totalPrice = cart.reduce(
    (price, item) => price + item.qty * item.price,
    0
  );

  return (
    <>
      <div className="cart">
        <h2 className="head-page"># cart</h2>
        {cart.length === 0 && (
          <>
            <div className="empty-cart">
              <h3>your shopping cart is empty</h3>
              <Link to="/shop">
                <button className="btn">Shop Now</button>
              </Link>
            </div>
          </>
        )}
        <div className="container">
          {cart.map((ele) => {
            return (
              <>
                <div className="box">
                  <div className="img-box">
                    <img src={ele.image} alt="cart"></img>
                  </div>
                  <div className="content">
                    <div className="details">
                      <h4>{ele.cat}</h4>
                      <h3>{ele.Name}</h3>
                      <p>Price : ${ele.price}</p>
                      <p>Total : ${ele.price * ele.qty}</p>
                    </div>
                    <div className="quantity">
                      <button onClick={() => incqty(ele)} className="btn">
                        +
                      </button>
                      <input type="" value={ele.qty} />
                      <button onClick={() => decqty(ele)} className="btn">
                        -
                      </button>
                    </div>
                  </div>
                    <div className="icon">
                      <ul>
                        <li onClick={() => removeProduct(ele)}>
                          <AiOutlineClose />
                        </li>
                      </ul>
                    </div>
                </div>
              </>
            );
          })}
        </div>
        <div className="cart-bottom">
          {cart.length > 0 && (
            <>
              <div className="total-price">
                <h4>Total : ${totalPrice}</h4>
              </div>
              <button className="btn">Checkout</button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
