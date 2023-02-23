import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { baseUrl } from "../../commonApi_tmdb/baseUrl";
import BoardComment from "./board_comment";
import "./board.css";

const BoardView = () => {
  const navigator = useNavigate();
  const [board, setBoard] = useState({});
  const [commentList, setCommentList] = useState([]);
  const { currentPage, num } = useParams();
  // console.log('currentPage :' + currentPage);
  // console.log('num :' + num);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    await axios
      .get(`${baseUrl}/board/view/${num}`)
      .then((response) => {
        setBoard(response.data.dto);
        setCommentList(response.data.blist);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  //download
  const handleDownLoad = async () => {
    await axios
      .get(`${baseUrl}/board/contentdownload/${board.upload}`, {
        responseType: "blob",
      })
      .then((response) => {
        console.log(response.headers);
        const fileName = board.upload.substring(board.upload.indexOf("_") + 1);
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", fileName);
        link.style.cssText = "display:none";
        document.body.appendChild(link);
        link.click();
        link.remove();
      })
      .catch((err) => {
        console.error(err.message);
      });
  };

  ///삭제
  const handleDelete = async (e) => {
    e.preventDefault();
    if (!window.confirm("삭제하시겠습니까?")) {
      return false;
    }
    await axios
      .delete(`${baseUrl}/board/delete/${num}`)
      .then(() => {
        console.log("삭제 완료");
        navigator(`/board/list/${currentPage}`);
      })
      .catch((err) => {
        console.error(err.message);
      });
  };

  const handleValueChange = (e) => {
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    setTextareas({ ...textareas, ...nextState });
  };

  //댓글 작성
  const [textareas, setTextareas] = useState({ subject: "" });
  // const [inputs, setInputs] = useState({
  //   writer: '',
  //   subject: '',
  // });
  const { writer, subject } = textareas;

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("writer", 1);
    formData.append("subject", subject);
    //답변글이면...
    if (num !== undefined) {
      formData.append("pnum", num);
      formData.append("num", num);
      formData.append("currentPage", currentPage);
    }

    const config = {
      headers: { "Content-Type": "multipart/form-data" },
    };

    await axios
      .post(`${baseUrl}/comment/write`, formData, config)
      .then((response) => {
        console.log(response.data);
        setTextareas({
          writer: "",
          subject: "",
        });
        getData();
        navigator(`/board/view/${currentPage}/${num}`);
        // navigator(`/board/list/${response.data}`);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="board_view_wrap">
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="notice_board">
        <img className="notice_board_img" src="/images/notice.png" />
        <div className="notice_board_title">공지 게시판</div>
      </div>
      <div>
        <Link
          className="btn btn-primary"
          to={`/board/list/${currentPage}`}
          style={{ float: "right", margin: "10px" }}
        >
          리스트
        </Link>
      </div>
      <table className="board_table">
        <thead>
          <tr>
            <td>
              <div className="writing_subject">{board.subject}</div>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="writing_data_wrap">
              <span className="writing_data">
                <span>작성일: </span>
                {board.reg_date}
              </span>

              <span className="writing_data">
                <span>작성자: </span>
                {board.nickname}
              </span>

              <span className="writing_data">
                <span>조회수: </span>
                {board.readcount}
              </span>
            </td>
          </tr>

          <tr>
            <td>
              <div
                className="pt-4 pb-2 board_content"
                style={{ whiteSpace: "pre" }} // 입력한 그대로 보이게
              >
                {board.content}
              </div>
            </td>
          </tr>
          {board.upload !== null ? (
            <tr>
              {/* <th>파일</th> */}
              <td colSpan="3">
                <img
                  className="download_btn_img"
                  src="/images/file-download.png"
                />
                <button className="download_btn" onClick={handleDownLoad}>
                  {board.upload
                    ? board.upload.substring(board.upload.indexOf("_") + 1)
                    : null}
                </button>
              </td>
            </tr>
          ) : null}
        </tbody>
      </table>
      <div className="board_btn_box" style={{ float: "right" }}>
        <Link
          className="btn btn-primary"
          to={`/board/write/${currentPage}/${num}/${board.ref}/${board.re_step}/${board.re_level}`}
          style={{ margin: "10px" }}
        >
          <span className="btn_text">답변</span>
        </Link>

        <Link
          className="btn btn-primary"
          to={`/board/update/${currentPage}/${num}`}
          style={{ margin: "10px" }}
        >
          <span className="btn_text">수정</span>
        </Link>

        <Link to={`/board/list/${currentPage}`}>
          <button
            className="btn btn-primary"
            onClick={handleDelete}
            style={{ margin: "10px" }}
          >
            <span className="btn_text">삭제</span>
          </button>
        </Link>
      </div>

      <table className="comment_table table">
        <tbody>
          {commentList &&
            commentList.map((comment) => {
              return (
                <BoardComment
                  board={comment}
                  num={num}
                  currentPage={currentPage}
                  key={comment.num}
                />
              );
            })}
        </tbody>
      </table>

      <div className="card">
        <form onSubmit={onSubmit}>
          <div className="card-body">
            <textarea
              className="form-control"
              row="1"
              name="subject"
              value={subject}
              onChange={handleValueChange}
              placeholder="댓글을 입력해주세요."
              style={{ resize: "none" }}
            ></textarea>
          </div>
          <div className="card-footer">
            <input type="submit" className="btn btn-primary" value="등록" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default BoardView;
