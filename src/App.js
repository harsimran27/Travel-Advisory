import './App.css';
import Map from "./components/map/Map";
import List from "./components/list/List";
import Navbar from "./components/header/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Map />
      <List />
    </div>
  );
}

export default App;
