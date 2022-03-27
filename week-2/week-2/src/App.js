import logo from './speclogo.png';
import './App.css';
import NavBar from './components/Navbar';
import CreateSource from './components/CreateSource';
import Source from './components/Source';

function App() {
  return (
    <div className="SourcePage">
      <header className="Source-header">
        <NavBar />
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
