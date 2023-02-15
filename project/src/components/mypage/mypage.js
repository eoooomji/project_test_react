import './mypage.css';

const MyPage = () => {
  return (
    <div className='mp_container'>
      <div className='mp_profile'>
        <p>닉네임이 들어가겠지</p>
      </div>

      <div className='user_contents'>
        <div className='user_content user_tag'>
          <h3>선호 태그</h3>
        </div>

        <div className='user_content user_actor'>
          <h3>선호 배우</h3>
          <div>
            <img src='' alt='photo' />
            <div>
              <a>배우이름</a>
              <a>대표작</a>
            </div>
          </div>
        </div>

        <div className='user_content user_director'>
          <h3>선호 감독</h3>
          <div>
            <a>감독이름</a>
            <a>대표작</a>
          </div>
        </div>

        <div className='user_content user_nation'>
          <h3>선호 국가</h3>
          <div className='top3'>
            <ul>
              <li>
                <p>first nation</p>
                <p>nnn편</p>
              </li>
              <li>
                <p>second nation</p>
                <p>nnn편</p>
              </li>
              <li>
                <p>third nation</p>
                <p>nnn편</p>
              </li>
            </ul>
          </div>
        </div>

        <div className='user_content user_genre'>
          <h3>선호 장르</h3>
          <div className='top3'>
            <ul>
              <li>
                <p>first genre</p>
                <p>nnn편</p>
              </li>
              <li>
                <p>second genre</p>
                <p>nnn편</p>
              </li>
              <li>
                <p>third genre</p>
                <p>nnn편</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
