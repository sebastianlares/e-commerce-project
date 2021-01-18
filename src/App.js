import "./App.css";
import Home from "./components/Home/Home";
import Item from "./components/Item/Item";

import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/navBar/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={"#HOMEWEAR #NOGENDER"}></ItemListContainer>
      {/* <Home /> */}
    </div>
  );
}

export default App;
