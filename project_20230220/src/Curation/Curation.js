import axios from 'axios';
import { useEffect, useState } from 'react';
import { baseUrl } from '../commonApi_tmdb/baseUrl';

const Curation = () => {
  const [userGender, setUserGender] = useState([]);

  const getGender = async () => {
    const data = new FormData();
    data.append('usercode', localStorage.getItem('usercode'));

    await axios
      .post(baseUrl + '/gender', data)
      .then((response) => {
        console.log(response);
        setUserGender(response.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    getGender();
  }, []);

  console.log(userGender);

  return (
    <div className='user_wrap'>
      <div className='user_gender_wrap'>
        <p>남자가 선호하는 영화</p>
        <p>{userGender[0].title}</p>
        {userGender.map((element) => {
          <>
            <div className='user_gender' key={element}>
              <div className='user_gender_poster'>
                {element.poster_url === null ? (
                  <div>이미지가 없습니다.</div>
                ) : (
                  <div className='poster_img'>
                    {/* <img
                        src={
                          'https://image.tmdb.org/t/p/w500' + element.poster_url
                        }
                      /> */}
                  </div>
                )}
                <div className='title'>{element.title}</div>
              </div>
            </div>
          </>;
        })}
      </div>
    </div>
  );
};

export default Curation;
