import "./App.css";

function App() {
  let html = true;
  let nivel = "avanzado";
  nivel === "avanzado" ? (html = true) : (html = false);
  return <div className="App">{console.log(html)}</div>;
}

export default App;
