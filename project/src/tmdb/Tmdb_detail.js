import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import TmdbUrl from '../commonApi_tmdb/tmdbUrl';
import TMDB_KEY from '../commonApi_tmdb/tmdb_key';
import Footer from '../components/layout/footer';
import Header from '../components/layout/header';

const MovieDetail = () => {
  const [movieInfo, setMovieInfo] = useState([]);
  const [genre, setGenre] = useState([{ id, name }]);
  const [castInfo, setCastInfo] = useState([]);
  const [crewInfo, setCrewInfo] = useState([]);

  const { movie_id } = useParams();

  const lang = '&language=ko';

  const getMovieInfo = async () => {
    await axios
      .get(TmdbUrl + '/' + movie_id + '?api_key=' + TMDB_KEY + lang)
      .then((response) => {
        console.log(response.data);
        setMovieInfo(response.data);
        for (let i = 0; i < response.data.genres.length; i++) {
          setGenre([
            {
              id: response.data.genres[i].id,
              name: response.data.genres[i].name,
            },
          ]);
        }
        console.log(genre);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const getCreditInfo = async () => {
    await axios
      .get(
        TmdbUrl + '/' + movie_id + '/credits' + '?api_key=' + TMDB_KEY + lang
      )
      .then((response) => {
        console.log(response.data);
        setCastInfo(response.data.cast);
        setCrewInfo(response.data.crew);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    getMovieInfo();
    getCreditInfo();
  }, []);

  return (
    <>
      <Header />
      <div>
        <img
          src={'https://image.tmdb.org/t/p/w500' + movieInfo.poster_path}
          width='300'
        />
        <div>{movieInfo.title}</div>
        <div>{movieInfo.overview}</div>
      </div>
      <Footer />
    </>
  );
};

export default MovieDetail;
