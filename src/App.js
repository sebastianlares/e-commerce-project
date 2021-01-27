import "./App.css";
import { Switch, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/navBar/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/category/:categoryId">
          <ItemListContainer greeting={"#HOMEWEAR #NOGENDER"} />
        </Route>
        <Route path="/item/:id" component={ItemDetailContainer} />
        <Route path="/">
          <ItemListContainer greeting={"#HOMEWEAR #NOGENDER"} />
        </Route>
        {/* <Route path="/" component={Home} /> */}
      </Switch>
    </div>
  );
}

export default App;
