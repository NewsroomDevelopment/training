import logo from './logo.svg';
import './App.css';
import Source from './components/Source'
import { useState } from 'react'; 

function App() {
  const [source, setSource] = useState([
    { number: 1, name: "Presbo", email: "presbo@columbia.edu" },
    { number: 2, name: "John Jay Mouse", email: "mouse@columbia.edu" },
    { number: 3, name: "Water Bottle Man", email: "flipper@columbia.edu" }
  ]);

  const deleteSource = (number) => {
    setSource(source.filter(s => s.number !== number)); 
  }

  return (
    <div className="App">
      <header className="App-header">
        {
          source.map(s => {
            return(
              <Source number= {s.number} name= {s.name} email= {s.email} delete={deleteSource}/>
            )
          })
        }
      </header>
    </div>
  );
}

export default App;
