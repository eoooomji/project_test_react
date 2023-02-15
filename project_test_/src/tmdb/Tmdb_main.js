import { useEffect, useState } from 'react';
import TmdbUrl from '../commonApi_tmdb/tmdbUrl';
import TmdbsearchUrl from '../commonApi_tmdb/tmdbSearchUrl';
import TMDB_KEY from '../commonApi_tmdb/tmdb_key';
import axios from 'axios';
import MovieInfo from './Tmdb_image';
import Header from '../components/layout/header';
import Footer from '../components/layout/footer';
import './Tmdb_image.css';

const Tmdb_main = () => {
  const lang = 'ko';
  const now = '/now_playing?';
  const popular = '/popluar?';
  const nowShow = TmdbUrl + now + 'api_key=' + TMDB_KEY + '&language=ko';

  const search =
    TmdbsearchUrl +
    '?api_key' +
    TMDB_KEY +
    '&language=' +
    lang +
    '&include_adult=false&query=' +
    '가족';

  const [data, setData] = useState();
  const [input, setInput] = useState({
    query: '',
  });
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
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

  return (
    <div className='test_section'>
      <Header />
      <>
        <p className='tag_name'>#현재상영작</p>
        <div className='now_playing'>
          {movieList.map((movie) => {
            return <MovieInfo movie={movie} key={movie.id} />;
          })}
        </div>
      </>
      <Footer />
    </div>
  );
};

export default Tmdb_main;
