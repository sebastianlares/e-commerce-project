import "./App.css";
import Home from "./components/Home/Home";
import Item from "./components/Item/Item";
import { Switch, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/navBar/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/category/:id">
          <ItemListContainer greeting={"#HOMEWEAR #NOGENDER"} />
        </Route>
        <Route exact path="/item/:id">
          <ItemDetailContainer />
        </Route>
        <Route>
          <ItemListContainer greeting={"#HOMEWEAR #NOGENDER"} />
        </Route>
        {/* <Route path="/" component={Home} /> */}
      </Switch>
    </div>
  );
}

export default App;
