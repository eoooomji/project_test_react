import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Test from './tmdb/test';

function App() {
  return (
    <div className='App'>
      <h3>영화 메인 페이지</h3>
      <Routes>
        <Route path='/' element={<Test />} />
      </Routes>
    </div>
  );
}

export default App;
