import { NavLink } from "react-router-dom";
import "./layout.css";

const Header = () => {
  return (
    <div className="header">
      <div>
        <ul className="header_list">
          <li>
            <NavLink to="/logout">
              <span className="menu_name">logout</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/mypage">
              <span className="menu_name">my page</span>
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="logo_box">
        <NavLink to="/" style={{ textDecoration: "none" }}>
          <span className="logo_name">U Got Film</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
