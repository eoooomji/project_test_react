import { Link, NavLink } from "react-router-dom";

const MovieNow = (props) => {
  const { movie } = props;
  return (
    <div className="movieTile_section">
      <div className="movie_tile">
        <div className="movie_poster">
          <img
            src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
            width="300"
          />
        </div>
        <div className="movie_title">
          <NavLink
            to={`/detail/${movie.id}`}
            style={{ textDecoration: "none" }}
          >
            <p>{movie.title}</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default MovieNow;
