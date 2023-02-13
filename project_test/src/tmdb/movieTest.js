const MovieTest = (props) => {
  const { movie } = props;
  const imageUrl = 'https://image.tmdb.org/t/p/w500';
  return (
    <tr>
      <td>
        {movie.title}
        {movie.id}
      </td>
      <td>{movie.overview}</td>
      <td>
        <img
          src={'https://image.tmdb.org/t/p/w500' + movie.poster_path}
          width='300'
        />
      </td>
      <td>{movie.release_date}</td>
      <td>{movie.genre_ids}</td>
    </tr>
  );
};

export default MovieTest;
