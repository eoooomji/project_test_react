import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, NavLink, useParams } from 'react-router-dom';
import TmdbsearchUrl from '../commonApi_tmdb/tmdbSearchUrl';
import TMDB_KEY from '../commonApi_tmdb/tmdb_key';
import './Naver_info_style.css';

const NaverInfo = (props) => {
  const lang = '&language=ko';
  const year = '&primary_release_year=';

  const { movie } = props;

  //console.log(movie.pubDate);

  const mv_title = movie.title
    .replace(/[<br></br>]/gi, '')
    .replace(/&amp;/gi, '%20%26%20');
  const mv_date = movie.pubDate;

  const [send, setSend] = useState({
    id: '',
    title: '',
  });

  async function getSearch_tmdb() {
    await axios
      .get(
        TmdbsearchUrl +
          '?api_key=' +
          TMDB_KEY +
          lang +
          '&query=' +
          mv_title +
          '&include_adult=false' +
          year +
          mv_date
      )
      .then((response) => {
        //console.log(response.data.results[0].id);
        if (response.data.total_results === 0) {
          alert('영화 정보가 없습니다.');
        } else {
          setSend({
            id: response.data.results[0].id,
            title: response.data.results[0].title,
          });
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  const handle = (e) => {
    getSearch_tmdb(e.target.value);
  };

  console.log(send.id);

  return (
    <>
      <div className='search_movie_list'>
        {/* <button onClick={handle}>클릭</button> */}
        <Link to={`/detail/${send.id}}`} key={send.id} onClick={handle}>
          <div className='movie_image'>
            {movie.image === '' ? (
              <div>이미지가 없습니다. </div>
            ) : (
              <img className='poster' src={movie.image} />
            )}
          </div>
          <div className='movie_title'>
            {movie.title.replace(/[<br></br>]/gi, '').replace(/&amp;/gi, '&')}
          </div>
          <div className='movie_date'>{movie.pubDate}</div>
          <div className='movie_rating'>{movie.userRating}</div>
        </Link>
      </div>
    </>
  );
};

export default NaverInfo;
