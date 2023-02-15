import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Naver_info_style.css';

const NaverInfo = (props) => {
  const { movie } = props;

  return (
    <>
      <div className='search_movie_list'>
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
      </div>
    </>
  );
};

export default NaverInfo;
