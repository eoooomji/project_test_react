import { useEffect, useState } from 'react';
import TmdbUrl from '../commonApi_tmdb/tmdbUrl';
import TmdbsearchUrl from '../commonApi_tmdb/tmdbSearchUrl';
import TMDB_KEY from '../commonApi_tmdb/tmdb_key';
import axios from 'axios';
import MovieNow from './Tmdb_now';
import MoviePop from './Tmdb_pop';
import Naver_Search from '../naver/Naver_search';
import { Link, NavLink } from 'react-router-dom';

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
        console.log(response.data.results);
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
        console.log(response.data.results);
        setPopList(response.data.results);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div>
      <h3>현재 상영작</h3>
      <table className='table' style={{ marginTop: 20, marginLeft: 50 }}>
        <colgroup>
          <col width='10%' />
          <col width='*%' />
          <col width='10%' />
          <col width='10%' />
          <col width='10%' />
        </colgroup>
        <thead>
          <tr>
            <th>타이틀</th>
            <th>포스터</th>
            <th>개봉일</th>
            <th>장르</th>
            <th>평점</th>
          </tr>
        </thead>
        <tbody>
          {movieList.map((movie) => {
            return <MovieNow movie={movie} key={movie.id} />;
          })}
        </tbody>
      </table>
      <h3>인기작</h3>
      <table className='table' style={{ marginTop: 20, marginLeft: 50 }}>
        <colgroup>
          <col width='10%' />
          <col width='*%' />
          <col width='10%' />
          <col width='10%' />
          <col width='10%' />
        </colgroup>
        <thead>
          <tr>
            <th>타이틀</th>
            <th>포스터</th>
            <th>개봉일</th>
            <th>장르</th>
            <th>평점</th>
          </tr>
        </thead>
        <tbody>
          {popList.map((movie) => {
            return <MoviePop movie={movie} key={movie.id} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Tmdb_main;
