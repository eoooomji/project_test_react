const MovieInfo = (props) => {
  const { movie } = props;
  return (
    <div className='movieTile_section'>
      <div className='movie_tile'>
        <div className='movie_poster'>
          <img
            src={'https://image.tmdb.org/t/p/w500' + movie.poster_path}
            width='300'
          />
        </div>
        <div className='movie_title'>
          <p>{movie.title}</p>
        </div>
        {/* <div className='movie_overview'>
          <p>{movie.overview}</p>
        </div> */}
      </div>
    </div>

    // <tr>
    //   <td>
    //     {movie.title}
    //     {movie.id}
    //   </td>
    //   <td>{movie.overview}</td>
    //   <td>
    //     <img
    //       src={'https://image.tmdb.org/t/p/w500' + movie.poster_path}
    //       width='300'
    //     />
    //   </td>
    //   <td>{movie.release_date}</td>
    //   <td>{movie.genre_ids}</td>
    // </tr>
  );
};

export default MovieInfo;
