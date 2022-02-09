import './App.css';
import Map from "./components/map/Map";
import List from "./components/list/List";
import Navbar from "./components/header/Navbar";

function App() {
  return (
    <div className="App">
      <div className='top'>
       <Navbar />
      </div>
      <div className='content'>
        <Map />
        <List />
      </div>
    </div>
  );
}

export default App;
