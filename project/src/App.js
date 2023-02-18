import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import MainView from './mainview/Tmdb_mainView';
import LoginForm from './components/login/loginForm';
import MyPage from './components/mypage/mypage';
import MovieDetail from './tmdb/Tmdb_detail';
import Genre_pop from './tmdb/Tmdb_genre_pop';
import Genre_vote from './tmdb/Tmdb_genre_vote';
import Person from './tmdb/Tmdb_person';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<MainView />} />
        <Route path='/login' element={<LoginForm />} />
        <Route path='/mypage' element={<MyPage />} />
        <Route path='/detail/:movie_id' element={<MovieDetail />} />
        <Route path='/genre/pop/:genre_id' element={<Genre_pop />} />
        <Route path='/genre/vote/:genre_id' element={<Genre_vote />} />
        <Route path='/person/:person_id' element={<Person />} />
      </Routes>
    </div>
  );
}

export default App;
