import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import TmdbPerson from '../commonApi_tmdb/tmdbPeople';
import TMDB_KEY from '../commonApi_tmdb/tmdb_key';
import Footer from '../components/layout/footer';
import Header from '../components/layout/header';
import Credit from './Tmdb_credit';
import './Tmdb_style.css';

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
        setPersonName(response.data.name);
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
      <div className='person_detail_wrap'>
        <div className='person_detail_profile'>
          <div className='person_detail_subject'>
            <img className='person_title_img' src='/images/celebrity.png' />
            인물 정보
          </div>
          <div className='person_detail_img'>
            {personInfo.profile_path === null ? (
              <img
                src='/images/none_img.jpg'
                style={{ width: '300px', height: '450px' }}
              />
            ) : (
              <img
                src={
                  'https://image.tmdb.org/t/p/w500' + personInfo.profile_path
                }
                style={{ width: '300px', height: '450px' }}
              />
            )}
          </div>
          <div className='person_detail_text'>
            <div className='person_detail_department'>
              <p>-{personInfo.known_for_department}-</p>
            </div>
            <div className='person_detail_name'>
              <span className='person_detail_name'>{personName}</span>
            </div>
            <div className='person_detail_birth'>
              <span>출생 {personInfo.birthday}</span>
              {personInfo.deathday !== null ? (
                <span>
                  <span> ~ </span>사망 {personInfo.deathday}
                </span>
              ) : null}
            </div>
          </div>
        </div>
        <div className='person_detail_credit_wrap'>
          <Credit
            id={person_id}
            key={person_id}
            department={personInfo.known_for_department}
          />
        </div>
      </div>
    </>
  );
};

export default Person;
