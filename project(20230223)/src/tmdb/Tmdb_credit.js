import axios from 'axios';
import { Fragment, useEffect, useState } from 'react';
import { Link, NavLink, useParams } from 'react-router-dom';
import TmdbPerson from '../commonApi_tmdb/tmdbPeople';
import TMDB_KEY from '../commonApi_tmdb/tmdb_key';
import Search_box from './search_box';
import Cast from './Tmdb_credit_cast';
import Crew from './Tmdb_credit_crew';

const Credit = (props) => {
  const lang = '&language=ko';
  const { id, department } = props;

  // 출연 및 연출 정보
  const [castInfo, setCastInfo] = useState([]);
  const [crewInfo, setCrewInfo] = useState([]);

  // 크레딧 정보
  const getPersonCredit = async () => {
    await axios
      .get(TmdbPerson + id + '/movie_credits?api_key=' + TMDB_KEY + lang)
      .then((response) => {
        console.log(response.data.crew);
        setCastInfo(response.data.cast);
        setCrewInfo(response.data.crew);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect((e) => {
    getPersonCredit();
  }, []);

  return (
    <div>
      <div>
        {department === 'Acting' ? (
          <div className='cast'>
            <div className='cast_detail_subject'>출연 작품</div>
            <div className='cast_detail_movie'>
              {castInfo &&
                castInfo.map((e, idx) => {
                  return <Cast cast={e} key={idx} />;
                })}
            </div>
          </div>
        ) : (
          <div className='cast'>
            <div className='cast_detail_subject'>연출 작품</div>
            <div className='cast_detail_movie'>
              {crewInfo &&
                crewInfo.map((e, idx) => {
                  return <Crew crew={e} key={idx} />;
                })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Credit;
