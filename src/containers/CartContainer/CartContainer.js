import React from "react";
import Cart from "../../components/Cart/Cart";
import { useGlobalContext } from "../../globalContext";
import { Link } from "react-router-dom";
import "./cartContainer.css";
import Button from "@material-ui/core/Button";

function CartContainer() {
  const { itemsOnCart, removeAllItems, total } = useGlobalContext();

  return (
    <div className="cart-container">
      <h1>Mi Carrito</h1>
      {itemsOnCart.length === 0 ? (
        <div>
          <h2>Parece ser que no tenés items agregados al carrito!</h2>
          <div className="cart-container-links">
            <Link to="/">
              <Button
                variant="outlined"
                color="primary"
                style={{ width: "100%", marginTop: "31px" }}
              >
                Volver a Inicio
              </Button>
            </Link>

            <Link to="/productos">
              <Button
                variant="outlined"
                color="primary"
                style={{ width: "100%", marginTop: "31px" }}
              >
                Ir a Productos
              </Button>
            </Link>
          </div>
        </div>
      ) : (
        <>
          <section className="total-items-detail">
            {itemsOnCart.map((item) => {
              const { id } = item;
              return <Cart key={id} singleItem={item} />;
            })}
          </section>
          <section className="total-price">
            <p>
              Total: ${total()}
              ,00
            </p>
            <Button
              id="orange-cart"
              variant="outlined"
              color="primary"
              style={{ width: "100%" }}
              onClick={() => removeAllItems()}
            >
              Remover Items
            </Button>
          </section>
        </>
      )}
    </div>
  );
}

export default CartContainer;

// {
//   itemsOnCart.length === 0
//     ? null
//     : (itemsOnCart.length = 2
//         ? itemsOnCart
//             .map((item) => {
//               console.log(item);
//               return item;
//             })
//             .reduce(
//               (a, b) =>
//                 a.item.price * a.quantity + b.item.price * b.quantity
//             )
//         : itemsOnCart.length > 2
//         ? itemsOnCart
//             .map((item) => {
//               console.log(item);
//               return item;
//             })
//             .reduce(
//               (a, b) =>
//                 a.item.price * a.quantity + b.item.price * b.quantity,
//               0
//             )
//         : itemsOnCart.length === 1 &&
//           itemsOnCart[0].item.price * itemsOnCart[0].quantity);
// }
