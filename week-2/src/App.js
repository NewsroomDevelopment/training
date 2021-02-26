import logo from './logo.svg';
import './App.css';
import Edit from './components/Edit';
import Hello from './components/Hello';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Hello text="hello erin" />
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Edit />
      </header>
    </div>
  );
}

export default App;
