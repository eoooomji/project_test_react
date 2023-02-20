import axios from 'axios';
import { useEffect, useState } from 'react';
import { baseUrl } from './commonApi_DB/baseUrl';

function App_db() {
  const [movie, setMovie] = useState([]);

  console.log(11);

  async function movieList() {
    await axios
      .get(baseUrl + '/movie')
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  useEffect(() => {
    movieList();
  }, []);
  return <div></div>;
}

export default App_db;
