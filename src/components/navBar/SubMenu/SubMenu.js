import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../../globalContext";

import "./subMenu.css";

function SubMenu({ category }) {
  const { isSubmenuOpen, openSubmenu, closeSubmenu } = useGlobalContext();
  const links = [
    { name: "Batas", link: "bata" },
    { name: "Buzos", link: "buzo" },
    { name: "Remerones", link: "remerón" },
    { name: "Shorts", link: "short" },
  ];

  return (
    <>
      <Link className="category" to={`/${category}`} onMouseOver={openSubmenu}>
        {category}
      </Link>
      <div className={`subMenu ${isSubmenuOpen && "show"}`}>
        {links.map((i, index) => {
          return (
            <Link
              to={`/category/${i.link}`}
              key={index}
              className="link"
              onClick={closeSubmenu}
            >
              {i.name}
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default SubMenu;
