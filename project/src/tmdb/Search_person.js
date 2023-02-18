import { NavLink } from 'react-router-dom';

const Search_people = (props) => {
  const { people } = props;

  return (
    <>
      <div className='search_person'>
        <NavLink to={`/person/${people.id}`}>
          <div className='person_image'>
            {people.profile_path === null ? (
              <div>이미지가 없습니다.</div>
            ) : (
              <img
                className='profile'
                src={'https://image.tmdb.org/t/p/w500' + people.profile_path}
                width='300'
              />
            )}
          </div>
          <div className='person_name'>{people.name}</div>
          <div className='person_department'>{people.known_for_department}</div>
        </NavLink>
      </div>
    </>
  );
};

export default Search_people;
