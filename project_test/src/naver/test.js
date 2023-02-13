import axios from 'axios';
import { useEffect, useState } from 'react';
import naverUrl from '../commonApi_naver/baseUrl';
import naverHeaders from '../commonApi_naver/naverHeaders';

const Test_naver = () => {
  const [searchMovie, setSearchMovie] = useState([]);
  const [input, setInput] = useState('');
  //const search = naverUrl + 'query=아이언맨' + '&display=100';

  useEffect(() => {
    getSearchList();
  }, []);

  const getSearchList = async (e) => {
    await axios
      .get(naverUrl + 'query=', naverHeaders)
      .then((response) => {
        console.log(response.data);
        setSearchMovie(response.data.items);
        setInput();
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const searchMv = async (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={searchMv}>
        <div>
          <input
            type='text'
            className='search_movie'
            placeholder='제목, 장르를 검색해주세요. (ex: 코미디 영화, 액션 영화)'
          />
          <input type='submit' value='검색' />
        </div>
      </form>
    </div>
  );
};

export default Test_naver;
