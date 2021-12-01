import { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import Navbar from './components/Navbar';
import InputForm from './components/InputForm';
import Source from './components/Source';
import axios from 'axios';

function App() {
  const [sources, setSources] = useState([]);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  // call your endpoint to fetch sources! - using basic fetch()
  useEffect(() => {
    fetch("api/sources",{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }})
      .then(response => {
        if (response.status >= 200 && response.status < 300) {
          return response;
        }
        throw response;
      })
      .then(response => response.json())
      .then(json => {
        console.log(json);
        setSources(json.data);
      })
      .catch(error => console.log(error))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // call public api endpoint to fetch popular articles from the New York Times
  /*useEffect(() => {
    axios("https://api.nytimes.com/svc/mostpopular/v2/viewed/30.json?api-key=YyPprXgmsAqNODNXPsfTVlp9TuDSVeHP")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);*/

  // fetch sources from spec sources api created by you! - using axios
  /*useEffect(() => {
    axios(`api/sources`)
      .then((response) => {
        setSources(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);*/

  const addSource = (source) => {
    source.id = uuid();

    setSources([...sources, source]);
  };

  const deleteSource = (id) => {
    setSources(sources.filter(source => source.id !== id));
  };

  return (
    <div className="App">
      <Navbar />
      <main>
        <InputForm
          addSource={addSource}
        />
        {loading ? <div>Loading...</div> :
          sources.map(source => {
            return (
              <Source
                number={source.id}
                name={source.name}
                email={source.email}
                deleteSource={deleteSource}
              />
            )
          })
        }

        {/* Print our raw data received from New York Times 
        <div>{JSON.stringify(data, null, 2)}</div> */}
      </main>
    </div>
  );
}

export default App;
