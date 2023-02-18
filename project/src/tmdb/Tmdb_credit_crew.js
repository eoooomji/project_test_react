import { NavLink } from 'react-router-dom';

const Crew = (props) => {
  const { crew } = props;

  return (
    <NavLink to={`/detail/${crew.id}`}>
      <div className='cast_wrap' style={{ float: 'left' }}>
        <div className='cast_img'>
          {crew.poster_path === null ? (
            <div>이미지가 없습니다.</div>
          ) : (
            <img
              src={'https://image.tmdb.org/t/p/w500' + crew.poster_path}
              width='200'
            />
          )}
          <div className='cast_title'>{crew.title}</div>
          <div className='cast_vote'>{crew.vote_average}</div>
          <div className='cast_genre'>{crew.release_date}</div>
        </div>
      </div>
    </NavLink>
  );
};

export default Crew;
