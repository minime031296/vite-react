import { useState } from 'react';
import DataDisplay from './DataDisplay/DataDisplay';

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [Error, setError] = useState("");

  async function fetchData() {
    try {
      let response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
      let d = await response.json();
      setData(d);
      setisLoading(false);
    } catch (error) {
      console.error(error);
      setError("No data to be shown");
    }
  }

  return (
    <>
      <button onClick={fetchData}>Fetch</button>
      {isLoading ? <p>"Data is loading..."</p> : (data.length === 0 ? <p>No data items found.</p> : <DataDisplay data={data}  error={Error}/>)}
     
    </>
  );
}

export default App;
