import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Tmdb_main from './tmdb/Tmdb_main';
import Naver_Search from './naver/Naver_search';
import MainView from './mainview/Tmdb_mainView';
import MovieDetail from './tmdb/Tmdb_detail';
import NaverInfo from './naver/Naver_info';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<MainView />}>
          <Route index element={<Tmdb_main />} />
          <Route path='search' element={<Naver_Search />} />
          <Route path='detail' element={<MovieDetail />}>
            {/* <Route path='/select' element={<MovieDetail />} /> */}
          </Route>
        </Route>
        {/* <Route path='/search' element={<Naver_Search />} /> */}
        {/* <Route path='/searchMovie' element={<NaverInfo />} /> */}
      </Routes>
    </div>
  );
}

export default App;
