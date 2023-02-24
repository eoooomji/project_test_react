import axios from 'axios';
import { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import TmdbdiscoverUrl from '../commonApi_tmdb/tmdbDiscoverUrl';
import TmdbPerson from '../commonApi_tmdb/tmdbPeople';
import TMDB_KEY from '../commonApi_tmdb/tmdb_key';

const BasicCuration = (props) => {
  const { basicCuration } = props;

  const best = {
    movie: basicCuration.bestMovie,
    genre: basicCuration.bestGenre,
    director: basicCuration.bestDirector,
    cast: basicCuration.bestCast,
  };

  const [genreList, setGenreList] = useState([]); // 장르 정보
  const [directorInfo, setDirectorInfo] = useState([]); // 감독 정보
  const [castInfo, setCastInfo] = useState([]); // 배우 정보

  // Tmdb API
  const lang = '&language=ko';
  const popular = '&sort_by=popularity.desc';
  const region = '&region=kr';
  const adult = '&include_adult=false';
  const genre_id = '&with_genres=';
  const v_count = '&vote_count.gte=100';
  const page = '&page=1';

  // 장르 인기순
  const getPopList = async (element) => {
    await axios
      .get(
        TmdbdiscoverUrl +
          '?api_key=' +
          TMDB_KEY +
          lang +
          region +
          popular +
          adult +
          page +
          genre_id +
          best.genre.genrecode +
          v_count
      )
      .then((response) => {
        setGenreList(response.data.results);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  //////////////////////////////////////////////////////

  // 감독 정보
  const getDirector = async () => {
    await axios
      .get(
        TmdbPerson +
          best.director.personcode +
          '/movie_credits?api_key=' +
          TMDB_KEY +
          lang
      )
      .then((response) => {
        setDirectorInfo(response.data.crew);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  ///////////////////////////////////////////////////////

  // 배우 정보
  const getCast = async () => {
    await axios
      .get(
        TmdbPerson +
          best.cast.personcode +
          '/movie_credits?api_key=' +
          TMDB_KEY +
          lang
      )
      .then((response) => {
        setCastInfo(response.data.cast);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    getPopList();
    getDirector();
    getCast();
  }, [basicCuration]);

  return (
    <div className='curation_wrap'>
      <div className='curation_component'>
        <p>UGF 실시간 뜨는 영화</p>
        {best.movie &&
          best.movie.map((best, idx) => {
            return (
              <div className='curation_info' key={idx}>
                <div className='curation_img'>
                  <img
                    src={'https://image.tmdb.org/t/p/w500' + best.poster_url}
                    width='300'
                  />
                </div>
                <NavLink to={`/detail/${best.moviecode}`}>
                  <div className='curation_title'>{best.title}</div>
                </NavLink>
              </div>
            );
          })}
      </div>
      <hr />
      <div className='curation_component'>
        <p>{best.genre.name}영화가 지금 대세!</p>
        <NavLink
          to={`/genre/pop/${best.genre.genrecode}`}
          key={best.genre.genrecode}
          value={best.genre.genrecode}
        >
          <button className='plus_button'>더보기</button>
        </NavLink>
        {genreList &&
          genreList.map((genre, idx) => {
            return (
              <div className='curation_info' key={idx}>
                <div className='curation_img'>
                  <img
                    src={'https://image.tmdb.org/t/p/w500' + genre.poster_path}
                    width='300'
                  />
                </div>
                <NavLink to={`/detail/${genre.id}`}>
                  <div className='curation_title'>{genre.title}</div>
                </NavLink>
              </div>
            );
          })}
      </div>
      <hr />
      <div className='curation_component'>
        <p>화제의 감독 {best.director.name}의 작품</p>
        {directorInfo &&
          directorInfo.map((director, idx) => {
            return (
              <div className='curation_info' key={idx}>
                <div className='curation_img'>
                  {director.poster_path === null ? (
                    <div>이미지가 없습니다.</div>
                  ) : (
                    <img
                      src={
                        'https://image.tmdb.org/t/p/w500' + director.poster_path
                      }
                      width='300'
                    />
                  )}
                </div>
                <NavLink to={`/detail/${director.id}`}>
                  <div className='curation_title'>{director.title}</div>
                </NavLink>
              </div>
            );
          })}
      </div>
      <hr />
      <div className='curation_component'>
        <p>화제의 배우 {best.cast.name}의 작품</p>
        {castInfo &&
          castInfo.map((cast, idx) => {
            return (
              <div className='curation_info' key={idx}>
                <div className='curation_img'>
                  {cast.poster_path === null ? (
                    <div>이미지가 없습니다.</div>
                  ) : (
                    <img
                      src={'https://image.tmdb.org/t/p/w500' + cast.poster_path}
                      width='300'
                    />
                  )}
                </div>
                <NavLink to={`/detail/${cast.id}`}>
                  <div className='curation_title'>{cast.title}</div>
                </NavLink>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default BasicCuration;
