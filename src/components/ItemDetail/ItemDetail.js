import React, { useEffect } from "react";
import "./itemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../globalContext";
import Carousel from "../Carousel/Carousel";
import { colors } from "@material-ui/core";

function ItemDetail({ loading, handleColor }) {
  const [alert, setAlert] = useState(false);
  const [slider, setSlider] = useState([]);
  const [itemColor, setItemColor] = useState();
  const [stock, setStock] = useState();
  const [colorSize, setColorSize] = useState();
  const [size, setSize] = useState();
  const [itemAmount, setItemAmount] = useState(1);
  const [cartReady, isCartReady] = useState(false);
  const [sizeAlert, setSizeAlert] = useState(false);

  const { addItemToCart, itemDetail, itemsOnCart } = useGlobalContext();
  const { title, description, price, categoryId, color } = itemDetail;

  useEffect(() => {
    if (!loading) {
      const firstItem = Object.values(color)[0];
      setSlider(firstItem.pictures);
      setItemColor(Object.keys(color).find((c) => c[0]));
      setColorSize(firstItem);
      setStock(Object.values(firstItem.stock)[0]);
      setSize(Object.keys(firstItem.stock)[0]);
    }
  }, [color]);

  const onAdd = (stock) => {
    if (stock === 0) {
      setAlert(true);
      return;
    } else if (size === "") {
      setSizeAlert(true);
      return;
    }
    const item = Object.entries(color).find((c) => c[0] === itemColor);
    const newItem = { ...item, 1: size };
    addItemToCart({ ...itemDetail, color: newItem }, stock);
    setItemAmount(stock);
    isCartReady(true);
  };

  const changeCurrentItem = (item, color) => {
    setSlider(item[1].pictures);
    setColorSize(item[1]);
    const select = document.getElementById("size");
    select.value = "a";
    setStock(20);
    setSize("");
    setItemColor(color);
  };

  const handleSize = (e) => {
    const t = e.target.value;
    const o = Object.entries(colorSize.stock).find((k) => k[0] === t);
    setSize(o[0]);
    setStock(o[1]);
  };

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setSizeAlert(false);
    }, 1000);
    return () => clearTimeout(timeOut);
  }, [sizeAlert]);

  return (
    <div
      className="item-detail"
      style={{
        gridTemplateColumns: `${loading ? "repeat(1, 1fr)" : "repeat(2, 1fr"}`,
      }}
    >
      {loading ? (
        <div className="sk-chase">
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
        </div>
      ) : (
        <>
          {slider && <Carousel images={slider} setLink={false} />}
          <div className="description">
            <div className="category-links">
              <Link to="/productos">Productos </Link>
              <span>/ </span>
              <Link
                to={`/category/${categoryId}`}
                style={{ textTransform: "capitalize" }}
              >
                {categoryId}
              </Link>
              <span>/ </span> {title}
            </div>
            <h3>{title}</h3>
            <div className="discount">
              <p>${new Intl.NumberFormat("de-DE").format(price)},00 </p>
              <p>
                ${new Intl.NumberFormat("de-DE").format(price - price * 0.2)},00
              </p>
              <p>20% OFF</p>
            </div>

            <p className="discount-two">
              10% de descuento pagando por transferencia bancaria ó efectivo.
            </p>
            <div className="color">
              <p>Color</p>
              {color &&
                Object.entries(color).map((item) => {
                  return (
                    <div
                      className={"color-pick"}
                      value={item[0]}
                      style={{ background: handleColor(item[0]) }}
                      onClick={() => changeCurrentItem(item, item[0])}
                    />
                  );
                })}
              <p>Talle: </p>
              {colorSize && (
                <div className="size">
                  <select
                    id="size"
                    onChange={(e) => handleSize(e)}
                    style={{
                      border: `${
                        sizeAlert ? "1px solid red" : "1px solid black"
                      }`,
                    }}
                  >
                    {Object.keys(colorSize.stock).map((z) => {
                      return <option value={z}>{z}</option>;
                    })}
                  </select>
                </div>
              )}
              <p>Stock: {stock} U</p>
            </div>
            <div className="countContainer">
              <ItemCount
                initial={1}
                alert={alert}
                stock={stock}
                onAdd={onAdd}
                setAlert={setAlert}
                cartReady={cartReady}
                size={size}
              />
            </div>

            <p className="descr">{description}</p>
          </div>
        </>
      )}
    </div>
  );
}

export default ItemDetail;
