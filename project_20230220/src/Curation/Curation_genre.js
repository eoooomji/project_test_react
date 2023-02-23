import axios from 'axios';
import { Fragment, useEffect, useState } from 'react';
import { NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import TmdbdiscoverUrl from '../commonApi_tmdb/tmdbDiscoverUrl';
import TMDB_KEY from '../commonApi_tmdb/tmdb_key';

const CurationGenre = (props) => {
  const { genre } = props;

  const lang = '&language=ko';
  const popular = '&sort_by=popularity.desc';
  const region = '&region=kr';
  const adult = '&include_adult=false';
  const genre_id = '&with_genres=';
  const v_count = '&vote_count.gte=100';
  const page = '&page=1';

  const [genreInfo, setGenreInfo] = useState([]);

  // 인기순
  const getGenreList = async () => {
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
          genre +
          v_count
      )
      .then((response) => {
        setGenreInfo(response.data.results);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  useEffect(() => {
    getGenreList();
  }, []);

  return (
    <>
      {genreInfo.map((genre, idx) => {
        return (
          <Fragment key={idx}>
            <div className='user_genre_poster'>
              {genre.poster_path === null ? (
                <div>이미지가 없습니다.</div>
              ) : (
                <div className='poster_img'>
                  <img
                    src={'https://image.tmdb.org/t/p/w500' + genre.poster_path}
                    width='300'
                  />
                </div>
              )}
            </div>
            <Link to={`/detail/${genre.id}`} key={genre.id} value={genre.id}>
              <div className='user_genre_title'>{genre.title}</div>
            </Link>
          </Fragment>
        );
      })}
    </>
  );
};

export default CurationGenre;
