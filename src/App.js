import "./App.css";

import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/navBar/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Comprar nunca fue tan fácil"></ItemListContainer>
    </div>
  );
}

export default App;
