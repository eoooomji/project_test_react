import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import TmdbsearchUrl from '../commonApi_tmdb/tmdbSearchUrl';
import TMDB_KEY from '../commonApi_tmdb/tmdb_key';

const MovieDetail = () => {
  const location = useLocation();

  console.log(location);

  //   const { title, releasDate } = props;
  //   const query = title;
  //   const date = releasDate;

  //   console.log(query);
  //   console.log(date);

  const lang = '&language=ko';
  //   const search =
  //     TmdbsearchUrl +
  //     '?api_key' +
  //     TMDB_KEY +
  //     lang +
  //     '&include_adult=false&query=' +
  //     query;

  return <div></div>;
};

export default MovieDetail;
