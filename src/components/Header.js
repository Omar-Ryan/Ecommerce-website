import React from "react";
import { Link , NavLink } from "react-router-dom";
import "./header.css";
import { MdLocalShipping } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import { FiLogIn } from "react-icons/fi";
import { CiLogout, CiUser } from "react-icons/ci";
import { useAuth0 } from "@auth0/auth0-react";

const Header = ({search , setSearch , searchProduct}) => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  return (
    <div className="header">
      <div className="top-header">
        <div className="icon">
          <MdLocalShipping />
        </div>
        <p>Free Shipping When Shopping Upto $1000</p>
      </div>
      <div className="mid-header">
        <div className="container">
          <Link to="/" className="logo">Logo</Link>
          <div className="search-box">
            < input type="text" value={search} placeholder="Search" onChange={(e)=> setSearch(e.target.value)} />
            <button onClick={searchProduct}>
              <AiOutlineSearch />
            </button>
          </div>
          {isAuthenticated ? (
            <div className="user">
              <div className="icon">
                <CiLogout />
              </div>
              <button
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
              >
                LogOut
              </button>
            </div>
          ) : (
            <div className="user">
              <div className="icon">
                <FiLogIn />
              </div>
              <button onClick={() => loginWithRedirect()}>LogIn</button>
            </div>
          )}
        </div>
      </div>
      <div className="last-header">
        <div className="user-profile">
          {isAuthenticated ? (
            <>
              <div className="icon">
                <CiUser />
              </div>
              <div className="info">
                <h2>{user.name}</h2>
                <p>{user.email}</p>
              </div>
            </>
          ) : (
            <>
              <div className="icon">
                <CiUser />
              </div>
              <div className="info">
                <p>Please LogIn</p>
              </div>
            </>
          )}
        </div>
        <div className="main-nav">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/shop">Shop</NavLink>
            </li>
            <li>
              <NavLink to="/cart">Cart</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
        <div className="offer">
          <p>flat 10% over all iphone</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
