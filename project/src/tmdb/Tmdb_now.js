import { Link } from 'react-router-dom';

const MovieNow = (props) => {
  const { movie } = props;
  return (
    <div className='movieTile_section'>
      <div className='movie_tile'>
        <Link to={`/detail/${movie.id}`}>
          <div className='movie_poster'>
            <img
              src={'https://image.tmdb.org/t/p/w500' + movie.poster_path}
              width='300'
            />
          </div>
          <div className='movie_title'>
            <p>{movie.title}</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default MovieNow;
