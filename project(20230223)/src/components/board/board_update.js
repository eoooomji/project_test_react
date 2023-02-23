import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { baseUrl } from "../../commonApi_tmdb/baseUrl";

const BoardUpdate = () => {
  const navigator = useNavigate();
  const { currentPage, num } = useParams();

  const [initBoard, setInitBoard] = useState({});
  const [inputs, setInputs] = useState({
    writer: "",
    email: "",
    subject: "",
    content: "",
    filename: null,
  });

  const { writer, email, subject, content, filename } = inputs;

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    await axios
      .get(`${baseUrl}/board/update/${num}`)
      .then((response) => {
        console.log(response.data);
        setInitBoard(response.data);
        setInputs(response.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleValueChange = (e) => {
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    setInputs((prev) => {
      return { ...prev, ...nextState };
    });
  };

  const handleFileChange = (e) => {
    e.preventDefault();
    console.log("files:" + e.target.files[0]);
    setInputs({ ...inputs, filename: e.target.files[0] });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("num", num);
    formData.append("email", email);
    formData.append("subject", subject);
    formData.append("content", content);

    console.log("filename:" + filename);
    if (filename !== null) formData.append("filename", filename);

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    await axios
      .put(`${baseUrl}/board/update`, formData, config)
      .then((response) => {
        console.log(response.data);
        setInputs({
          writer: "",
          email: "",
          subject: "",
          content: "",
          filename: null,
        });

        navigator(`/board/list/${currentPage ? currentPage : 1}`);
      })
      .catch((err) => {
        console.error(err.message);
      });
  };

  const handleReset = (e) => {
    e.preventDefault();
    setInputs(initBoard);
  };

  const handleBack = (e) => {
    e.preventDefault();
    navigator(-1);
  };

  ////////////////////////////////////
  return (
    <div className="board_writing_wrap">
      <br />
      <br />
      <br />
      <div className="notice_board">
        <img className="notice_board_img" src="/images/notice.png" />
        <div className="notice_board_title">공지 게시판</div>
      </div>

      <form name="frm" encType="multipart/form-data">
        <table className="board_writing_table" style={{ marginTop: 20 }}>
          <tbody>
            <tr className="board_writing_tr">
              <th className="board_writing_text">글쓴이</th>
              <td>{initBoard.writer}</td>
              <th className="board_writing_text">등록일</th>
              <td>{initBoard.reg_date}</td>
            </tr>

            <tr>
              <th className="board_writing_text">제목</th>
              <td colSpan="3">
                <input
                  className="board_writing_input"
                  type="text"
                  name="subject"
                  id="subject"
                  defaultValue={initBoard.subject}
                  value={subject}
                  onChange={handleValueChange}
                />
              </td>
            </tr>

            <tr>
              <th className="board_writing_text">메일</th>
              <td colSpan="3">
                <input
                  className="board_writing_input"
                  type="text"
                  name="email"
                  id="email"
                  defaultValue={initBoard.email}
                  value={email}
                  onChange={handleValueChange}
                />
              </td>
            </tr>

            <tr>
              <th className="board_writing_text">내용</th>
              <td colSpan="3">
                <textarea
                  className="board_writing_input"
                  name="content"
                  id="content"
                  rows="13"
                  cols="40"
                  defaultValue={initBoard.content}
                  value={content}
                  onChange={handleValueChange}
                  style={{ resize: "none" }}
                ></textarea>
              </td>
            </tr>

            <tr>
              <th className="board_writing_text">첨부파일</th>
              <td colSpan="3">
                <input
                  className="board_writing_input"
                  type="file"
                  name="filename"
                  id="filepath"
                  onChange={handleFileChange}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <div>
          <img className="download_btn_img" src="/images/file-download.png" />
          <span className="board_writing_file_name">{initBoard.upload}</span>
        </div>
        <div className="board_writing_btn">
          <button
            className="btn btn-primary"
            onClick={handleUpdate}
            style={{ margin: "5px" }}
          >
            수정
          </button>
          <button
            className="btn btn-primary"
            onClick={handleReset}
            style={{ margin: "5px" }}
          >
            취소
          </button>
          <button
            className="btn btn-primary"
            onClick={handleBack}
            style={{ margin: "5px" }}
          >
            뒤로
          </button>
        </div>
      </form>
    </div>
  );
};

export default BoardUpdate;
