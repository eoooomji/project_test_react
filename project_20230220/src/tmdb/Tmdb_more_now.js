import axios from 'axios';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import TmdbUrl from '../commonApi_tmdb/tmdbUrl';
import TMDB_KEY from '../commonApi_tmdb/tmdb_key';

const MoreNow = () => {
  const lang = '&language=ko';
  const now = '/now_playing?';
  const [page, setPage] = useState(1);

  const nowShow = TmdbUrl + now + 'api_key=' + TMDB_KEY + lang;

  // 현재 상영작
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    getMovieList();
  }, []);

  // 현재 상영작 리스트
  const getMovieList = async () => {
    await axios
      .get(nowShow + '&page=' + page)
      .then((response) => {
        // console.log(response.data);
        setMovieList(movieList.concat(response.data.results));
        setPage(page + 1);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleChangeNow = (e) => {
    getMovieList(e.target.value);
  };

  return (
    <>
      <div className='movieTile_section'>
        {movieList.map((movie, idx) => {
          <div className='movie_tile' key={idx}>
            <div className='movie_poster'>
              <img
                src={'https://image.tmdb.org/t/p/w500' + movie.poster_path}
                width='300'
              />
            </div>
            <div className='movie_title'>
              <NavLink
                to={`/detail/${movie.id}`}
                style={{ textDecoration: 'none' }}
              >
                <p>{movie.title}</p>
              </NavLink>
            </div>
          </div>;
        })}
        <button className='plus_button' onClick={handleChangeNow}>
          더보기
        </button>
      </div>
    </>
  );
};

export default MoreNow;
