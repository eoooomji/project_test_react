import { Outlet } from 'react-router-dom';
import Naver_Search from '../naver/Naver_search';
import Tmdb_main from '../tmdb/Tmdb_main';

const MainView = () => {
  return (
    <>
      <h3>영화 메인 페이지</h3>
      <div className='searchMovie'>{<Naver_Search />}</div>
    </>
  );
};

export default MainView;
