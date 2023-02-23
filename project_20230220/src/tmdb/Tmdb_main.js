import { useEffect, useState } from 'react';
import TmdbUrl from '../commonApi_tmdb/tmdbUrl';
import TMDB_KEY from '../commonApi_tmdb/tmdb_key';
import axios from 'axios';
import MovieInfo from './Tmdb_now';
import MoviePop from './Tmdb_pop';
import './Tmdb_style.css';
import { NavLink } from 'react-router-dom';

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
      .get(nowShow + '&page=1')
      .then((response) => {
        //console.log(response.data);
        // setMovieList(movieList.concat(response.data.results));
        setMovieList(response.data.results);
        // setPage(page + 1);
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
      .get(popShow + '&page=1')
      .then((response) => {
        //console.log(response.data.results);
        setPopList(response.data.results);
        // setPopList(popList.concat(response.data.results));
        // setPage(page + 1);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  // const handleChangeNow = (e) => {
  //   getMovieList(e.target.value);
  // };

  // const handleChangePop = (e) => {
  //   getPopList(e.target.value);
  // };

  return (
    <div className='Tmdb_main_wrap'>
      <p className='tag_name'>#현재상영작</p>
      <div className='main_chart now_playing'>
        {movieList.map((movie) => {
          return <MovieInfo movie={movie} key={movie.id} />;
        })}
      </div>
      <div className='button_wrap'>
        <NavLink to='/movie/now'>
          <button className='plus_button'>더보기</button>
        </NavLink>
      </div>

      <p className='tag_name'>#인기작</p>
      <div className='main_chart popular'>
        {popList.map((movie) => {
          return <MoviePop movie={movie} key={movie.id} />;
        })}
      </div>
      <div className='button_wrap'>
        <NavLink to='/movie/pop'>
          <button className='plus_button'>더보기</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Tmdb_main;
