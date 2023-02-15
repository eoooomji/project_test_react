import { Link } from 'react-router-dom';

const MoviePop = (props) => {
  const { movie } = props;
  return (
    <>
      <tr>
        <td>{movie.title}</td>
        <td>
          <img
            src={'https://image.tmdb.org/t/p/w500' + movie.poster_path}
            width='300'
          />
        </td>
        <td>{movie.release_date}</td>
        <td>{movie.genre_ids}</td>
      </tr>
    </>
  );
};

export default MoviePop;
