import React, { useState, useEffect } from "react";
import CartWidget from "./cartWidget/CartWidget";
import "./navBar.css";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../globalContext";
import SignButton from "./SignButton/SignButton";
import SubMenu from "./SubMenu/SubMenu";

function NavBar() {
  const [navbarBackground, setNavbarBackground] = useState(false);
  const [userPhoto, setUserPhoto] = useState();
  const {
    itemsOnCart,
    currentUser,
    pageError,
    setErrorRequest,
  } = useGlobalContext();
  const links = [
    { name: "home", id: 1 },
    { name: "productos", id: 2 },
    { name: "nosotros", id: 3 },
    { name: "contacto", id: 4 },
  ];

  useEffect(() => {
    if (currentUser !== null) {
      setUserPhoto(currentUser.photoURL);
    }
  }, [currentUser]);

  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY > 80) {
        setNavbarBackground(true);
      } else setNavbarBackground(false);
    };
    window.addEventListener("scroll", changeBackground);
    return () => window.removeEventListener("scroll", changeBackground);
  }, []);

  return (
    <>
      {!pageError && (
        <div className={navbarBackground ? "navbar active " : "navbar"}>
          <div className="brand-name">
            <Link to="/" style={{ border: "none" }}>
              <h3 className="simpleShop">SimpleCloths</h3>
            </Link>
          </div>
          <ul>
            {links.map((link) => {
              const { name, id } = link;
              return name === "productos" ? (
                <div
                  key={id}
                  to={`/${name}`}
                  className={"category"}
                  onClick={() => setErrorRequest({ itemList: false })}
                >
                  <SubMenu category={"productos"} className={"category"} />
                </div>
              ) : (
                <Link key={id} to={`/${name}`}>
                  <li>{name}</li>
                </Link>
              );
            })}
          </ul>
          <div className="user-section">
            {itemsOnCart === null ||
            undefined ||
            itemsOnCart.length === 0 ? null : (
              <Link to="/cart" id="cartWidget">
                <CartWidget />
              </Link>
            )}
            {currentUser !== null && (
              <Link to="/userProfile" id="profile-link">
                <img
                  src={userPhoto}
                  className="user-profile-link"
                  alt={userPhoto}
                />
              </Link>
            )}
            <SignButton />
          </div>
        </div>
      )}
    </>
  );
}

export default NavBar;
