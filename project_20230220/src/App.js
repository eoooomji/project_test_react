import './App.css';
import { Route, Routes } from 'react-router-dom';
import MainView from './mainview/Tmdb_mainView';
import MyPage from './components/mypage/mypage';
import MovieDetail from './tmdb/Tmdb_detail';
import Genre_pop from './tmdb/Tmdb_genre_pop';
import Genre_vote from './tmdb/Tmdb_genre_vote';
import Person from './tmdb/Tmdb_person';
import BoardList from './components/board/board_list';
import BoardView from './components/board/board_view';
import BoardWrite from './components/board/board_write';
import BoardUpdate from './components/board/board_update';
import Movie from './tmdb/Movie_general';
import LoginPage from './components/login/LoginPage';
import LogOut from './components/login/logOut';
import JoinForm from './components/login/JoinForm';
import Curation from './Curation/Curation';
function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<MainView />}>
          <Route index element={<Movie />} />
          <Route path='board' element={<BoardList />}>
            <Route path='list/:currentPage' element={<BoardList />} />
          </Route>
          <Route path='board/view/:currentPage/:num' element={<BoardView />} />
          <Route path='board/write' element={<BoardWrite />} />
          <Route
            path='board/write/:currentPage/:num'
            element={<BoardWrite />}
          />
          <Route
            path='board/write/:currentPage/:num/:ref/:re_step/:re_level'
            element={<BoardWrite />}
          />
          <Route
            path='board/update/:currentPage/:num'
            element={<BoardUpdate />}
          />
          <Route path='detail/:movie_id' element={<MovieDetail />} />
          <Route path='genre/pop/:genre_id' element={<Genre_pop />} />
          <Route path='genre/vote/:genre_id' element={<Genre_vote />} />
          <Route path='person/:person_id' element={<Person />} />
        </Route>

        <Route path='/login' element={<LoginPage />} />
        <Route path='/mypage' element={<MyPage />} />
        <Route path='/join' element={<JoinForm />} />
        <Route path='/logout' element={<LogOut />} />
      </Routes>
    </div>
  );
}

export default App;
