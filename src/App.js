import "./App.css";
import { Switch, Route } from "react-router-dom";
import ItemListContainer from "./containers/ItemListContainer/ItemListContainer";
import NavBar from "./components/navBar/NavBar";
import ItemDetailContainer from "./containers/ItemDetailContainer/ItemDetailContainer";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import UserProfileContainer from "../src/containers/UserProfileContainer/UserProfileContainer";
import CartContainer from "./containers/CartContainer/CartContainer";
import { useGlobalContext } from "./globalContext";
import React from "react";
import AboutUs from "./components/AboutUs/AboutUs";
import Contact from "./components/Contact/Contact";

function App() {
  const { handleSubmenu } = useGlobalContext();
  return (
    <div className="App" onMouseOver={handleSubmenu}>
      <NavBar />
      <Switch>
        <Route path="/cart" component={CartContainer} />
        <Route path="/category/:categoryId">
          <ItemListContainer greeting={"#HOMEWEAR #NOGENDER"} />
        </Route>
        <Route path="/userProfile" component={UserProfileContainer} />

        <Route exact path="/item/:id" component={ItemDetailContainer} />
        <Route path="/productos">
          <ItemListContainer greeting={"#HOMEWEAR #NOGENDER"} />
        </Route>
        <Route path="/nosotros" component={AboutUs} />
        <Route path="/contacto" component={Contact} />

        <Route path="/" component={Home} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
