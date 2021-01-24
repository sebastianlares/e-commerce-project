import "./App.css";
import Home from "./components/Home/Home";
import Item from "./components/Item/Item";
import { Switch, Route, Link } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/navBar/NavBar";
import ItemDetail from "./components/ItemDetail/ItemDetail";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemDetailContainer />
      {/* <Switch>
        <Route exact path="/items">
          <ItemListContainer
            greeting={"#HOMEWEAR #NOGENDER"}
          ></ItemListContainer>
        </Route>
        <Route path="/" component={Home} />
      </Switch> */}
    </div>
  );
}

export default App;
