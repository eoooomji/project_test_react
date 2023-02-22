const Curation_gender = (props) => {
  const { gender } = props;

  return (
    <>
      <div className='user_gender'>
        <div className='user_gender_poster'>
          {gender.poster_url === null ? (
            <div>이미지가 없습니다.</div>
          ) : (
            <div className='poster_img'>
              <img
                src={'https://image.tmdb.org/t/p/w500' + gender.poster_url}
              />
            </div>
          )}
          <div className='title'>{gender.title}</div>
        </div>
      </div>
    </>
  );
};

export default Curation_gender;
