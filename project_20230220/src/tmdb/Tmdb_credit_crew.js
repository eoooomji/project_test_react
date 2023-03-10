import { NavLink } from "react-router-dom";
import "./Tmdb_style.css";

const Crew = (props) => {
  const { crew } = props;

  return (
    <div className="cast_wrap">
      <div className="cast_img">
        {crew.poster_path === null ? (
          <img src="/images/none_img.jpg" />
        ) : (
          <img
            src={"https://image.tmdb.org/t/p/w500" + crew.poster_path}
            width="200"
          />
        )}
      </div>
      <NavLink to={`/detail/${crew.id}`} style={{ textDecoration: "none" }}>
        <div className="cast_title">{crew.title}</div>
      </NavLink>

      <div className="cast_genre">{crew.release_date}</div>
      <span className="star_rating">★</span>
      <span className="cast_vote">{crew.vote_average}</span>
    </div>
  );
};

export default Crew;
