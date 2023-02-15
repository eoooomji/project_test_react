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
  const getMovieList = async () => {
    await axios
      .get(nowShow)
      .then((response) => {
        //console.log(response.data.results);
        setMovieList(response.data.results);
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
      .get(popShow)
      .then((response) => {
        //console.log(response.data.results);
        setPopList(response.data.results);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <>
      <p className='tag_name'>#현재상영작</p>
      <div className='now_playing'>
        {movieList.map((movie) => {
          return <MovieInfo movie={movie} key={movie.id} />;
        })}
      </div>
      <p className='tag_name'>#인기작</p>
      <div className='popular'>
        {popList.map((movie) => {
          return <MoviePop movie={movie} key={movie.id} />;
        })}
      </div>
    </>
  );
};

export default Tmdb_main;
