import Navbar from './components/Navbar';
import InputForm from './components/InputForm';
import Source from './components/Source';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <InputForm />
        <Source
          number={1}
          name="Presbo"
          email= "presbo@columbia.edu"
        />
        <Source
          number={2}
          name="John Jay Mouse"
          email= "mouse@columbia.edu"
        />
        <Source
          number={3}
          name="Water bottle man"
          email= "bottleflipper@columbia.edu"
        />
      </main>
    </div>
  );
}

export default App;
