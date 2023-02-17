import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import Tmdb_main from './Tmdb_main';
import TmdbsearchUrl from '../commonApi_tmdb/tmdbSearchUrl';
import TMDB_KEY from '../commonApi_tmdb/tmdb_key';
import Search_Movie from './Search_info';
import Genre_btn from './Tmdb_genre';

const Movie = () => {
  const [searchMovieList, setSearchMovieList] = useState([]);
  const [input, setInput] = useState('');
  const lang = '&language=ko';

  const getSearchList = async (e) => {
    await axios
      .get(
        TmdbsearchUrl +
          '?api_key=' +
          TMDB_KEY +
          lang +
          '&query=' +
          input +
          '&include_adult=false'
      )
      .then((response) => {
        setInput(input);
        //console.log(response.data);
        setSearchMovieList(response.data.results);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleInputText = (e) => {
    e.preventDefault();
    setInput(e.target.value);
    setSearchMovieList('');
  };

  const searchMv = async (e) => {
    e.preventDefault();
    getSearchList();
  };

  return (
    <div>
      <form onSubmit={searchMv}>
        <div className='search_wrap'>
          <div className='search_box'>
            <input
              type='text'
              required={true}
              placeholder='검색어를 입력해주세요.'
              onChange={handleInputText}
              value={input}
            />
            <input type='submit' value='검색' />
          </div>
        </div>
      </form>
      <br />
      <div>
        <Genre_btn />
      </div>
      <br />
      {input === '' ? (
        <Tmdb_main />
      ) : (
        <>
          <div className='movieList' style={{ marginTop: 20, marginLeft: 50 }}>
            <div>
              {searchMovieList &&
                searchMovieList.map((movie, index) => {
                  return <Search_Movie movie={movie} key={index} />;
                })}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Movie;
