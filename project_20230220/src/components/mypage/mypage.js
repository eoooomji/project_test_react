import { NavLink } from 'react-router-dom';
import Header from '../layout/header';
import './mypage.css';

const MyPage = () => {
  return (
    <div className='wrap'>
      <div className='user_contents profile'>
        {/* 홈으로 아이콘 */}
        <div className='profile_menu' alt='profile_menu'>
          <NavLink to='/'>
            <img
              className='profile_menu_icon'
              src='./images/home.png'
              alt='홈'
            />
          </NavLink>

          {/* 회원정보 아이콘 */}

          <NavLink to='/userdata'>
            <img
              className='profile_menu_icon'
              src='./images/edit.png'
              alt='회원정보'
            />
          </NavLink>
        </div>
        <div>
          <img className='profile_icon' src='./images/popcorn.png' />
          <div className='user_name'>
            <span>정민</span>님의 취향 분석
          </div>
          {/* <span>user_id</span> */}
        </div>
      </div>
      {/* 영화 선호 태그 */}
      <div className='user_contents user_tag'>
        <h2>#영화선호태그</h2>
        <div className='best_one'>
          <span>정민</span>님이 선호하는 태그입니다.
        </div>
      </div>
      {/* 선호배우 */}
      <div className='user_contents user_actor'>
        <h2>#선호배우</h2>
        <div className='best_one'>
          <span>정민</span>님이 가장 선호하는 배우는 <span>다니엘 헤니</span>
          입니다.
        </div>
        <div className='actor_list'>
          <div className='list_intro'>
            <span>
              <img
                className='list_img'
                src='./images/daniel.jpg'
                alt='profile_img'
              />
            </span>
            <div className='person_data'>
              <NavLink to='/detail' style={{ textDecoration: 'none' }}>
                <span className='actor_name'>다니엘 헤니</span>
              </NavLink>
              <br />
              <NavLink to='/detail' style={{ textDecoration: 'none' }}>
                <span className='movie_name'>공조2: 인터내셔날</span>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      {/* 선호감독 */}
      <div className='user_contents user_director'>
        <h2>#선호감독</h2>
        <div className='best_one'>
          <span>정민</span>님이 가장 선호하는 감독은 <span>팀 버튼</span>
          입니다.
        </div>
        <div className='actor_list'>
          <div className='list_intro'>
            <span>
              <img
                className='list_img'
                src='./images/daniel.jpg'
                alt='profile_img'
              />
            </span>
            <div className='person_data'>
              <NavLink to='/detail' style={{ textDecoration: 'none' }}>
                <span className='actor_name'>팀 버튼</span>
              </NavLink>
              <br />
              <NavLink to='/detail' style={{ textDecoration: 'none' }}>
                <span className='movie_name'>가위손</span>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      {/* 선호국가 */}
      <div className='user_contents user_nation'>
        <div className='nation_list'>
          <h2>#선호국가</h2>
          <div className='best_one'>
            <span>정민</span>님이 가장 선호하는 국가는 <span>미국</span>
            입니다.
          </div>
          <div className='list_top3'>
            <div className='list_top3_name'>미국</div>
            <div className='list_top3_count'>234편</div>
          </div>
          <div className='list_top3'>
            <div className='list_top3_name'>영국</div>
            <div className='list_top3_count'>112편</div>
          </div>
          <div className='list_top3'>
            <div className='list_top3_name'>한국</div>
            <div className='list_top3_count'>97편</div>
          </div>

          <div className='top_list'>
            <span className='top_list_name'>인도</span>
            <span className='top_list_count'>88편</span>
          </div>
          <div className='top_list'>
            <span className='top_list_name'>프랑스</span>
            <span className='top_list_count'>56편</span>
          </div>
          <div className='top_list'>
            <span className='top_list_name'>독일</span>
            <span className='top_list_count'>8편</span>
          </div>
        </div>
      </div>
      {/* 선호장르 */}
      <div className='user_contents user_genre'>
        <div className='genre_list'>
          <h2>#선호장르</h2>
          <div className='best_one'>
            <span>정민</span>님이 가장 선호하는 장르는 <span>스릴러</span>
            입니다.
          </div>
          <div className='list_top3'>
            <div className='list_top3_name'>스릴러</div>
            <div className='list_top3_count'>98편</div>
          </div>
          <div className='list_top3'>
            <div className='list_top3_name'>코미디</div>
            <div className='list_top3_count'>57편</div>
          </div>
          <div className='list_top3'>
            <div className='list_top3_name'>로맨스</div>
            <div className='list_top3_count'>23편</div>
          </div>

          <div className='top_list'>
            <span className='top_list_name'>멜로</span>
            <span className='top_list_count'>20편</span>
          </div>
          <div className='top_list'>
            <span className='top_list_name'>공포</span>
            <span className='top_list_count'>18편</span>
          </div>
          <div className='top_list'>
            <span className='top_list_name'>SF</span>
            <span className='top_list_count'>5편</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
