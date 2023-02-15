import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Tmdb_main from './tmdb/Tmdb_main';
import Naver_Search from './naver/Naver_search';
import CenterMode from './slide/slider';
import MyPage from './components/mypage/mypage';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Tmdb_main />} />
        <Route path='/search' element={<Naver_Search />} />
        <Route path='/mypage' element={<MyPage />} />
      </Routes>
    </div>
  );
}

export default App;
