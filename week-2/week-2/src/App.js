import logo from './speclogo.png';
import './App.css';
import NavBar from './components/Navbar';
import CreateSource from './components/CreateSource';
import Source from './components/Source';

function App() {
  return (
    <div className="source-page">
      <header className="source-header">
        <img src={logo} className="App-logo" alt="logo" />
        <NavBar />
      </header>

      <div className='search-bar'>
        <CreateSource />
      </div>

      <div>
        <Source />
      </div>
    </div>
  );
}

export default App;
