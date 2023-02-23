import { useEffect, useState } from 'react';
import TmdbUrl from '../commonApi_tmdb/tmdbUrl';
import TMDB_KEY from '../commonApi_tmdb/tmdb_key';
import axios from 'axios';
import MovieInfo from './Tmdb_now';
import MoviePop from './Tmdb_pop';
import './Tmdb_style.css';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Tmdb_main = () => {
  const lang = '&language=ko';
  const now = '/now_playing?';
  const popular = '/popular?';
  const [page, setPage] = useState(1);

  const nowShow = TmdbUrl + now + 'api_key=' + TMDB_KEY + lang;

  const popShow = TmdbUrl + popular + 'api_key=' + TMDB_KEY + lang;

  // 현재 상영작
  const [movieList, setMovieList] = useState([]);

  // 인기작
  const [popList, setPopList] = useState([]);

  useEffect(() => {
    getMovieList();
  }, []);

  // 현재 상영작 리스트
  const getMovieList = async (e) => {
    await axios
      .get(nowShow + '&page=' + page)
      .then((response) => {
        //console.log(response.data);
        setMovieList(movieList.concat(response.data.results));
        setPage(page + 1);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    getPopList();
  }, []);

  // 인기작 리스트
  const getPopList = async () => {
    await axios
      .get(popShow + '&page=' + page)
      .then((response) => {
        //console.log(response.data.results);
        setPopList(popList.concat(response.data.results));
        setPage(page + 1);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleChangeNow = (e) => {
    getMovieList(e.target.value);
  };

  const handleChangePop = (e) => {
    getPopList(e.target.value);
  };

  const settings = {
    dots: false, // 캐러셀의 점을 보여줄 것 인지
    infinite: true, // 마지막장 다음에 첫장이 나오게 할 지
    speed: 500, // 다음 컨텐츠 까지의 속도
    autoplay: true, // 자동으로 재생할지
    arrows: true, // 좌,우 버튼
    centerMode: true, // 현재 컨텐츠 가운데 정렬
    autoplaySpeed: 2000, // 자동 캐러셀 속도
    slidesToShow: 5, // 한 화면에 몇개의 사진을 동시에 보여줄지
    slidesToScroll: 1,
    draggable: true, // 드래그
  };

  // const settings = {
  //   dots: true, // 개수 표시 점
  //   infinite: true, // 무한 캐러셀
  //   speed: 500, // 다음 컨텐츠 까지의 속도
  //   slidesToShow: 3, // 화면에 보이는 컨텐츠 수
  //   slidesToScroll: 1, // 스크롤 시 넘어가는 컨텐츠 수
  //   centerMode: true, // 현재 컨텐츠 가운데 정렬
  //   centerPadding: '10px', // 중앙 컨텐츠 padding 값
  //   autoplay: true, // 자동 캐러셀
  //   autoplaySpeed: 2000, // 자동 캐러셀 속도
  //   draggable: false // 드래그
  //   fade: false, // 사라졌다 나타나는 효과
  //   arrows: true, // 좌,우 버튼
  //   vertical: false, // 세로 캐러셀
  //   initialSlide: 1, // 첫 컨텐츠 번호
  //   pauseOnFocus: true, // focus시 정지
  //   pauseOnHover: true, // hover시 정지
  //   responsive: [ // 반응형 옵션
  //   {
  //       breakpoint: 480, // (숫자)px 이하일 경우
  //         settings: {
  //           slidesToShow: 1,
  //           arrows:true,
  //     }
  //   }
  //   ]
  // };

  return (
    <div className='Tmdb_main_wrap'>
      <p className='tag_name'>#현재상영작</p>{' '}
      <div className='main_chart now_playing'>
        <Slider {...settings}>
          {movieList.map((movie) => {
            return <MovieInfo movie={movie} key={movie.id} />;
          })}
        </Slider>
      </div>
      <div className='button_wrap'>
        {page === 10 ? null : (
          <button className='plus_button' onClick={handleChangeNow}>
            <span>+</span>
          </button>
        )}
      </div>
      <p className='tag_name'>#인기작</p>
      <div className='main_chart popular'>
        <Slider {...settings}>
          {popList.map((movie) => {
            return <MoviePop movie={movie} key={movie.id} />;
          })}
        </Slider>
      </div>
      <div className='button_wrap'>
        {page === 10 ? null : (
          <button className='plus_button' onClick={handleChangePop}>
            <span>+</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default Tmdb_main;
