import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../../commonApi_tmdb/baseUrl";
import "./login.css";

const JoinForm = () => {
  const navigator = useNavigate();

  const [member, setMember] = useState({
    username: "",
    password: "",
    authRole: "ROLE_MEMBER",
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post(`${baseUrl}/join`, member, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        setMember({
          username: "",
          password: "",
          authRole: "ROLE_MEMBER",
        });
      })
      .then((response) => {
        navigator("/");
      })
      .catch((err) => {
        console.error(err.message);
      });
  };

  const handleValueChange = (e) => {
    //radio 버튼에서는 e.preventDefault()를 하면 더블 클릭을 해줘야 한다.
    //e.preventDefault();
    setMember({ ...member, [e.target.name]: e.target.value });
  };
  return (
    <div className="join_wrap">
      <form onSubmit={onSubmit}>
        <div className="join_form_container">
          <div className="join_form_title">회원가입</div>
          <div className="form-group mb-1">
            <input
              type="text"
              className="form-control join_form_input"
              name="username"
              placeholder="username"
              onChange={handleValueChange}
            />
          </div>
          <div className="form-group mb-1">
            <input
              type="password"
              className="form-control join_form_input"
              name="password"
              placeholder="Password"
              onChange={handleValueChange}
            />
          </div>
          <div className="form-group mb-3 mb-1">
            <div
              className="form-check form-check-inline form-group"
              onChange={handleValueChange}
            >
              <label>
                <input
                  type="radio"
                  name="authRole"
                  value="ROLE_ADMIN"
                  className="form-check-input join_radio_input"
                />
                관리자
              </label>
              <label>
                <input
                  type="radio"
                  name="authRole"
                  value="ROLE_MANAGER"
                  className="form-check-input join_radio_input"
                />
                매니저
              </label>
              <label>
                <input
                  type="radio"
                  name="authRole"
                  value="ROLE_MEMBER"
                  className="form-check-input join_radio_input"
                  defaultChecked={true}
                />
                일반 사용자
              </label>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            가입 완료
          </button>
        </div>
      </form>
    </div>
  );
};

export default JoinForm;