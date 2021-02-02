import "./App.css";
import { Switch, Route } from "react-router-dom";
import ItemListContainer from "./containers/ItemListContainer/ItemListContainer";
import NavBar from "./components/navBar/NavBar";
import ItemDetailContainer from "./containers/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import Home from "./components/Home/Home";
import { cartContext } from "./context/cartContext";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <cartContext.Provider value={[]}>
        <NavBar />
        <Switch>
          <Route path="/cart" component={Cart} />
          <Route exact path="/category/:categoryId">
            <ItemListContainer greeting={"#HOMEWEAR #NOGENDER"} />
          </Route>
          <Route exact path="/item/:id" component={ItemDetailContainer} />
          <Route path="/productos">
            <ItemListContainer greeting={"#HOMEWEAR #NOGENDER"} />
          </Route>
          <Route path="/" component={Home} />
        </Switch>
        <Footer />
      </cartContext.Provider>
    </div>
  );
}

export default App;
