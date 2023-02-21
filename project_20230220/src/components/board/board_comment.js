import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { baseUrl } from '../../commonApi_tmdb/baseUrl';

const BoardComment = (props) => {
  const navigator = useNavigate();
  let { board } = props;
  const { currentPage, num } = useParams();
  const [commentList, setCommentList] = useState([]);

  const getData = async () => {
    await axios
      .get(`${baseUrl}/board/view/${num}`)
      .then((response) => {
        setCommentList(response.data.blist);
        board = commentList;
        window.location.reload();
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  ///댓글 삭제
  const handleDelete = async (e) => {
    e.preventDefault();
    if (!window.confirm('삭제하시겠습니까?')) {
      return false;
    }
    await axios
      .delete(`${baseUrl}/comment/delete/${board.num}`)
      .then(() => {
        console.log('삭제 완료');
        getData();
      })
      .catch((err) => {
        console.error(err.message);
      });
  };

  return (
    <tr>
      <td>댓글번호{board.num}</td>
      <td>{board.nickname}</td>
      <td>
        {board.re_level > 0 ? (
          <>
            <img
              src="/images/level.gif"
              width={20 * board.re_level}
              height="15"
            />
            <img src="/images/re.gif" />
          </>
        ) : null}

        {board.subject}
      </td>

      <td>{board.reg_date}</td>
      <td>
        {' '}
        <button
          className="btn btn-outline-secondary btn-sm"
          onClick={handleDelete}
        >
          작성자, 관리자만 삭제할 수 있는 버튼
        </button>
      </td>
    </tr>
  );
};

export default BoardComment;
