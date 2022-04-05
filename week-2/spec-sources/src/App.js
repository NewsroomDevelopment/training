import logo from './logo.png';
import './App.css';
import Header from './components/Header.jsx';
import SearchBar from './components/SearchBar.jsx';
import Source from './components/Source.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Header />
      </header>

      <SearchBar />

      <Source number = "1:" name="Presbo" email="presbo@columbia.edu" />
      <Source number = "2:" name="John Jay Mouse" email="mouse@columbia.edu" />
      <Source number = "3:" name="Water Bottle Man" email="flipper@columbia.edu" />

    </div>
  );
}

export default App;
