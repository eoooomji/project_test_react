const MovieTest = (props) => {
  const { movie } = props;
  const imageUrl = "https://image.tmdb.org/t/p/w500";
  return (
    <>
      <tr>
        <td>{movie.title}</td>
        <td>{movie.overview}</td>
        <td>
          <img
            src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
            width="300"
          />
        </td>
      </tr>
    </>
  );
};

export default MovieTest;
