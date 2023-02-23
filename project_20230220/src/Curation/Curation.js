import axios from 'axios';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { baseUrl } from '../commonApi_tmdb/baseUrl';
import CurationGender from './Curation_gender';
import CurationGenre from './Curation_genre';

const Curation = () => {
  const [basicCuration, setBasicCuration] = useState();
  const [choiceCuration, setChoiceCuration] = useState([]);

  const [info, setInfo] = useState({});

  const data = new FormData();
  data.append('usercode', localStorage.getItem('usercode'));

  const getCuration = async () => {
    await axios
      .post(baseUrl + '/curation', data)
      .then((response) => {
        console.log(response.data);
        setBasicCuration(response.data.basic_curation);
        setChoiceCuration(response.data.choice_curation);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    getCuration();
  }, []);

  // console.log(info);

  return (
    <>
      {/* <div className='user_gender_wrap'>
        {info.gender === '남' ? (
          <p>남자가 선호하는 영화</p>
        ) : (
          <p>여자가 선호하는 영화</p>
        )}
        {userGender &&
          userGender.map((gender, idx) => {
            return <CurationGender gender={gender} key={idx} />;
          })}
      </div>
      <hr />
      <div className='user_genre_wrap'>
        <p>{userGenre.name}을 좋아하신다면?</p>
        <NavLink
          to={`/genre/pop/${userGenre.genrecode}`}
          value={userGenre.genrecode}
        >
          <div className='more_info'>더보기</div>
        </NavLink>
        <CurationGenre genre={userGenre.genrecode} key={userGenre.genrecode} />
      </div> */}
    </>
  );
};

export default Curation;
