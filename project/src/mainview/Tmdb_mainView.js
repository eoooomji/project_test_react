import { Outlet } from 'react-router-dom';
import Footer from '../components/layout/footer';
import Header from '../components/layout/header';
import Naver_Search from '../naver/Naver_search';
import Tmdb_main from '../tmdb/Tmdb_main';
//import Naver_Search from '../naver/Naver_search';
//import Tmdb_main from '../tmdb/Tmdb_main';

const MainView = () => {
  return (
    <>
      <Header />
      <Naver_Search />
      <Footer />
    </>
  );
};

export default MainView;
