import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, NavLink, useNavigate, useParams } from 'react-router-dom';
import './Search_info_style.css';

const Search_Movie = (props) => {
  const { movie } = props;

  return (
    <>
      <div className='search_movie_list'>
        {/* <button onClick={handle}>클릭</button> */}
        <Link to={`/detail/${movie.id}`}>
          <div className='movie_image'>
            {movie.posterPath === '' ? (
              <div>이미지가 없습니다. </div>
            ) : (
              <img
                className='poster'
                src={'https://image.tmdb.org/t/p/w500' + movie.poster_path}
              />
            )}
          </div>
          <div className='movie_title'>{movie.title}</div>
          <div className='movie_date'>{movie.releas_date}</div>
          <div className='movie_rating'>{movie.vote_average}</div>
        </Link>
      </div>
    </>
  );
};

export default Search_Movie;
