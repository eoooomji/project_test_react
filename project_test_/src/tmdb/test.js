import { useEffect, useState } from "react";
import baseUrl from "../commonApi/baseUrl";
import searchUrl from "../commonApi/searchUrl";
import TMDB_KEY from "../commonApi/tmdb_key";
import axios from "axios";
import MovieTest from "./movieTest";
import Header from "../components/layout/header";
import Footer from "../components/layout/footer";

const Test = () => {
  const lang = "ko";
  const now = "/now_playing?";
  const popular = "/popluar?";
  const nowShow = baseUrl + now + "api_key=" + TMDB_KEY + "&language=ko";

  const search =
    searchUrl +
    "?api_key" +
    TMDB_KEY +
    "&language=" +
    lang +
    "&include_adult=false&query=" +
    "가족";

  const [data, setData] = useState();
  const [input, setInput] = useState({
    query: "",
  });
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    await axios
      .get(nowShow)
      .then((response) => {
        console.log(response.data.results);
        setMovieList(response.data.results);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div>
      <Header />
      <table className="table" style={{ marginTop: 20, marginLeft: 50 }}>
        <colgroup>
          <col width="10%" />
          <col width="10%" />
          <col width="*%" />
          <col width="10%" />
          <col width="10%" />
          <col width="10%" />
        </colgroup>
        <thead>
          <tr>
            <th>타이틀</th>
            <th>줄거리</th>
            <th>포스터</th>
            <th>개봉일</th>
            <th>장르</th>
            <th>평점</th>
          </tr>
        </thead>
        <tbody>
          {movieList.map((movie) => {
            return <MovieTest movie={movie} key={movie.id} />;
          })}
        </tbody>
      </table>
      <Footer />
    </div>
  );
};

export default Test;
