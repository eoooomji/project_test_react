import Naver_Search from '../naver/Naver_search';
import Tmdb_main from '../tmdb/Tmdb_main';

const MainView = () => {
  return (
    <>
      <div className='searchMovie'>
        <Naver_Search />
      </div>
      <div>
        <Tmdb_main />
      </div>
    </>
  );
};

export default MainView;
