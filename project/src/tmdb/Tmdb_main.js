import { useEffect, useState } from 'react';
import TmdbUrl from '../commonApi_tmdb/tmdbUrl';
import TMDB_KEY from '../commonApi_tmdb/tmdb_key';
import axios from 'axios';
import MovieInfo from './Tmdb_now';
import MoviePop from './Tmdb_pop';
import './Tmdb_style.css';

const Tmdb_main = () => {
  const lang = '&language=ko';
  const now = '/now_playing?';
  const popular = '/popular?';
  const [page, setPage] = useState(1);

  const nowShow = TmdbUrl + now + 'api_key=' + TMDB_KEY + lang;

  const popShow = TmdbUrl + popular + 'api_key=' + TMDB_KEY + lang;

  // 현재 상영작
  const [movieList, setMovieList] = useState([]);

  // 인기작
  const [popList, setPopList] = useState([]);

  useEffect(() => {
    getMovieList();
  }, []);

  // 현재 상영작 리스트
  const getMovieList = async (e) => {
    await axios
      .get(nowShow + '&page=' + page)
      .then((response) => {
        //console.log(response.data);
        setMovieList(movieList.concat(response.data.results));
        setPage(page + 1);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    getPopList();
  }, []);

  // 인기작 리스트
  const getPopList = async () => {
    await axios
      .get(popShow + '&page=' + page)
      .then((response) => {
        //console.log(response.data.results);
        setPopList(popList.concat(response.data.results));
        setPage(page + 1);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleChangeNow = (e) => {
    getMovieList(e.target.value);
  };

  const handleChangePop = (e) => {
    getPopList(e.target.value);
  };
  return (
    <>
      <p className='tag_name'>#현재상영작</p>
      <div className='now_playing'>
        {movieList.map((movie) => {
          return <MovieInfo movie={movie} key={movie.id} />;
        })}
        <div className='button_wrap'>
          {page === 10 ? null : (
            <button onClick={handleChangeNow}>더보기</button>
          )}
        </div>
      </div>
      <p className='tag_name'>#인기작</p>
      <div className='popular'>
        {popList.map((movie) => {
          return <MoviePop movie={movie} key={movie.id} />;
        })}
        {page === 10 ? null : <button onClick={handleChangePop}>더보기</button>}
      </div>
    </>
  );
};

export default Tmdb_main;
