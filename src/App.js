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
import Error404 from "./components/Error404/Error404";

function App() {
  const { handleSubmenu } = useGlobalContext();
  return (
    <div className="App" onMouseOver={handleSubmenu}>
      <NavBar />
      <Switch>
        <Route exact path="/cart" component={CartContainer} />
        <Route path="/category/:categoryId">
          <ItemListContainer greeting={"#HOMEWEAR #NOGENDER"} />
        </Route>
        <Route exact path="/userProfile" component={UserProfileContainer} />

        <Route exact path="/item/:id" component={ItemDetailContainer} />
        <Route exact path="/productos">
          <ItemListContainer greeting={"#HOMEWEAR #NOGENDER"} />
        </Route>
        <Route exact path="/nosotros" component={AboutUs} />
        <Route exact path="/contacto" component={Contact} />

        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/e-commerce-project/" component={Home} />
        <Route component={Error404} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
