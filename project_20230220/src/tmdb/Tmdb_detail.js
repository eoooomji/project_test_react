import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import TmdbUrl from '../commonApi_tmdb/tmdbUrl';
import TMDB_KEY from '../commonApi_tmdb/tmdb_key';
import Footer from '../components/layout/footer';
import Header from '../components/layout/header';
import './Tmdb_style.css';

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

  console.log(movieInfo);

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
      <div className='detail_wrap'>
        {/* 영화정보: 포스터, 제목, 줄거리, 장르, 개봉일 */}
        <div className='movie_detail'>
          {movieInfo.poster_path === null ? (
            <img className='poster_img' src='./images/none_img.jpg' />
          ) : (
            <img
              className='poster_img'
              src={'https://image.tmdb.org/t/p/w500' + movieInfo.poster_path}
              width='300'
            />
          )}

          <div className='movie_detail_text'>
            <div className='movie_title_box'>
              <img className='movie_title_img' src='/images/clapperboard.png' />
              <span className='movie_title'>{movieInfo.title}</span>
            </div>
            <div className='movie_overview'>{movieInfo.overview}</div>
            <div className='movie_genre'>
              <span className='outline_title'>장르</span>
              {genre.map((element, idx) => (
                <span className='outline_content' key={idx}>
                  {/* {element.id} */}
                  {element.name}
                </span>
              ))}
            </div>
            <div className='release_date'>
              <span className='outline_title'>개봉일</span>
              <span className='outline_content'>{movieInfo.release_date}</span>
            </div>
          </div>
        </div>

        {/* 감독 */}
        <div className='detail_box'>
          <div className='detail_title'>감독</div>
          <div className='detail_content'>
            {crewInfo.profile === null ? (
              <img className='crew_img' src='/images/none_img.jpg' />
            ) : (
              <img
                className='crew_img'
                src={'https://image.tmdb.org/t/p/w500' + crewInfo.profile}
                width='200'
              />
            )}
            <Link
              to={`/person/${crewInfo.id}`}
              style={{ textDecoration: 'none' }}
            >
              <div className='crew_name'>{crewInfo.name}</div>
            </Link>
          </div>
        </div>

        {/* 출연배우 */}
        <div className='detail_box'>
          <div className='detail_title'>배우</div>
          {castInfo.map((cast, idx) => (
            <div className='detail_content' key={idx}>
              {cast.profile_path === null ? (
                <img className='crew_img' src='/images/none_img.jpg' />
              ) : (
                <img
                  className='crew_img'
                  src={'https://image.tmdb.org/t/p/w500' + cast.profile_path}
                />
              )}
              <Link
                key={idx}
                // className='actor_wrap'
                to={`/person/${cast.id}`}
                style={{ textDecoration: 'none' }}
              >
                <div className='crew_name'>{cast.name}</div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MovieDetail;
