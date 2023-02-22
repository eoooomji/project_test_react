import axios from 'axios';
import { useEffect, useState } from 'react';
import { baseUrl } from '../commonApi_tmdb/baseUrl';
import Curation_gender from './Curation_gender';
import Curation_genre from './Curation_genre';

const Curation = () => {
  const [userGender, setUserGender] = useState([]);
  const [userGenre, setUserGenre] = useState([]);

  const [gender, setGender] = useState();

  const data = new FormData();
  data.append('usercode', localStorage.getItem('usercode'));

  const getCuration = async () => {
    await axios
      .post(baseUrl + '/curation', data)
      .then((response) => {
        console.log(typeof response.data.gender);
        setGender(response.data.gender);
        setUserGender(response.data.genderInfo);
        setUserGenre(response.data.genreInfo);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    getCuration();
  }, []);

  console.log(userGender);
  console.log(userGenre);
  console.log(gender);

  return (
    <div className='user_wrap'>
      <div className='user_gender_wrap'>
        {gender === '남' ? (
          <p>남자가 선호하는 영화</p>
        ) : (
          <p>여자가 선호하는 영화</p>
        )}
        {userGender &&
          userGender.map((gender, idx) => {
            return <Curation_gender gender={gender} key={idx} />;
          })}
      </div>
      <div className='user_genre_wrap'>
        <div>
          <Curation_genre
            genre={userGenre.genrecode}
            key={userGenre.genrecode}
          />
        </div>
      </div>
    </div>
  );
};

export default Curation;
