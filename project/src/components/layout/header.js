import { NavLink } from 'react-router-dom';
// import Naver_Search from '../../naver/Naver_search';
import './layout.css';
const Header = () => {
  return (
    <div className='header'>
      <div>
        <ul className='header_list'>
          <li>
            <NavLink to='/login'>login</NavLink>
          </li>
          <li>
            <NavLink to='/join'>join</NavLink>
          </li>
          <li>
            <NavLink to='/mypage'>my page</NavLink>
          </li>
        </ul>
      </div>
      <h1>
        <NavLink to='/'>HEADER</NavLink>
      </h1>
    </div>
  );
};

export default Header;
