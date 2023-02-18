import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import TmdbUrl from '../commonApi_tmdb/tmdbUrl';
import TMDB_KEY from '../commonApi_tmdb/tmdb_key';
import Footer from '../components/layout/footer';
import Header from '../components/layout/header';

const MovieDetail = () => {
  const navigator = useNavigate();

  const [movieInfo, setMovieInfo] = useState([]);
  const [genre, setGenre] = useState([]);
  const [castInfo, setCastInfo] = useState([]);
  const [crewInfo, setCrewInfo] = useState({
    id: '',
    name: '',
    profile: '',
  });

  const { movie_id } = useParams();
  // if (movie_id === null) {
  //   navigator();
  // }
  //console.log(movie_id);

  const lang = '&language=ko';

  const getMovieInfo = async () => {
    await axios
      .get(TmdbUrl + '/' + movie_id + '?api_key=' + TMDB_KEY + lang)
      .then((response) => {
        //console.log(response.data);
        setMovieInfo(response.data);
        setGenre(response.data.genres);
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
        //console.log(response.data);
        setCastInfo(response.data.cast);
        for (let i = 0; i < response.data.crew.length; i++) {
          if (response.data.crew[i].job === 'Director') {
            setCrewInfo({
              id: response.data.crew[i].id,
              name: response.data.crew[i].name,
              profile: response.data.crew[i].profile_path,
            });
          }
        }
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
        {movieInfo.poster_path === null ? (
          <div>이미지가 없습니다.</div>
        ) : (
          <img
            src={'https://image.tmdb.org/t/p/w500' + movieInfo.poster_path}
            width='300'
          />
        )}
        <div>{movieInfo.title}</div>
        <div>{movieInfo.overview}</div>
        {genre.map((element, idx) => (
          <div key={idx}>
            {element.id}
            {element.name}
          </div>
        ))}
        <div>개봉일 {movieInfo.release_date}</div>
      </div>
      <p>감독</p>
      <Link className='director_wrap' to={`/person/${crewInfo.id}`}>
        <div>
          {crewInfo.profile === null ? (
            '이미지가 없습니다.'
          ) : (
            <img
              src={'https://image.tmdb.org/t/p/w500' + crewInfo.profile}
              width='200'
            />
          )}
          <div>{crewInfo.name}</div>
        </div>
      </Link>
      <p>배우</p>
      {castInfo.map((cast, idx) => (
        <Link key={idx} className='actor_wrap' to={`/person/${cast.id}`}>
          <div className='actor' key={idx}>
            {cast.profile_path === null ? (
              '이미지가 없습니다.'
            ) : (
              <img
                src={'https://image.tmdb.org/t/p/w500' + cast.profile_path}
                width='200'
              />
            )}
            <div>{cast.name}</div>
          </div>
        </Link>
      ))}

      <Footer />
    </>
  );
};

export default MovieDetail;
