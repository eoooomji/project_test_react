import { NavLink } from 'react-router-dom';

const Cast = (props) => {
  const { cast } = props;

  return (
    <NavLink to={`/detail/${cast.id}`}>
      <div className='cast_wrap' style={{ float: 'left' }}>
        <div className='cast_img'>
          {cast.poster_path === null ? (
            <div>이미지가 없습니다.</div>
          ) : (
            <img
              src={'https://image.tmdb.org/t/p/w500' + cast.poster_path}
              width='200'
            />
          )}
        </div>
        <div className='cast_title'>{cast.title}</div>
        <div className='cast_vote'>{cast.vote_average}</div>
        <div className='cast_genre'>{cast.release_date}</div>
      </div>
    </NavLink>
  );
};
export default Cast;
