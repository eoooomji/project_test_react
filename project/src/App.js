import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import MainView from './mainview/Tmdb_mainView';
import LoginForm from './components/login/loginForm';
import MyPage from './components/mypage/mypage';
import MovieDetail from './tmdb/Tmdb_detail';
import NaverInfo from './naver/Naver_info';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<MainView />} />
        <Route path='/login' element={<LoginForm />} />
        <Route path='/mypage' element={<MyPage />} />
        <Route path='/detail/:movie_id' element={<MovieDetail />} />
        <Route path='/detail/:movie_id' element={<NaverInfo />} />
      </Routes>
    </div>
  );
}

export default App;
