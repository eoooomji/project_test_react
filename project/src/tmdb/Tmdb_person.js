import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import TmdbPerson from '../commonApi_tmdb/tmdbPeople';
import TMDB_KEY from '../commonApi_tmdb/tmdb_key';
import Footer from '../components/layout/footer';
import Header from '../components/layout/header';
import Credit from './Tmdb_credit';

const Person = () => {
  const lang = '&language=ko';
  const { person_id } = useParams();

  // 인물 정보
  const [personInfo, setPersonInfo] = useState([]);
  const [personName, setPersonName] = useState([]); // 영문 및 한글 이름 저장용

  const getPersonInfo = async () => {
    await axios
      .get(TmdbPerson + person_id + '?api_key=' + TMDB_KEY + lang)
      .then((response) => {
        setPersonInfo(response.data);
        setPersonName(response.data.also_known_as);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    getPersonInfo();
  }, []);

  return (
    <>
      <Header />
      <div className='person_wrap'>
        <div className='person_img'>
          {personInfo.profile_path === null ? (
            <div>이미지가 없습니다.</div>
          ) : (
            <img
              src={'https://image.tmdb.org/t/p/w500' + personInfo.profile_path}
              width='300'
            />
          )}
        </div>
        <div className='person_department'>
          <p>{personInfo.known_for_department}</p>
        </div>
        <div className='person_name'>
          <p>{personName[0]}</p>
          <p>{personName[2]}</p>
        </div>
        <div className='person_birth'>
          <p>출생 {personInfo.birthday}</p>
          {personInfo.deathday !== null ? (
            <p>사망 {personInfo.deathday}</p>
          ) : null}
        </div>
        <div className='person_credit_wrap'>
          <Credit
            id={person_id}
            key={person_id}
            department={personInfo.known_for_department}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Person;
