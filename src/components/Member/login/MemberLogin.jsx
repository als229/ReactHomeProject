import {
  LoginFormDiv,
  LoginTitleDiv,
  LoginContentDiv,
  LoginTitleForm,
  InputForm,
  InputDiv,
  InputBtn,
  InputLabel,
  MemberBodyDiv,
} from "./MemberLogin.styled";

import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

const MemberLogin = () => {
  const [memberId, setMemberId] = useState("");
  const [memberPw, setMemberPw] = useState("");
  const [idMsg, setIdMsg] = useState("");
  const [pwMsg, setPwMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const { auth, login } = useContext(AuthContext);

  const memberIdCheck = (e) => {
    setMemberId(e.target.value);
  };

  const memberPwCheck = (e) => {
    setMemberPw(e.target.value);
  };

  useEffect(() => {
    if (memberId.length != 0) {
      const regexp = /^[a-zA-Z0-9]{5,15}$/;
      if (!regexp.test(memberId.trim())) {
        setIdMsg("아이디 값이 유효하지 않음");
      } else {
        setIdMsg("");
      }
    } else {
      setIdMsg("");
    }

    if (memberPw.length != 0) {
      const regexp2 = /^[a-zA-Z0-9]{4,15}$/;
      if (!regexp2.test(memberPw.trim())) {
        setPwMsg("비밀번호 값이 유효하지 않음");
      } else {
        setPwMsg("");
      }
    } else {
      setPwMsg("");
    }
  }, [memberId, memberPw]);

  const handleLogin = (e) => {
    e.preventDefault();

    const regexp = /^[a-zA-Z0-9]{5,15}$/;

    if (!regexp.test(memberId)) {
      setIdMsg("아이디 값이 유효하지 않음");
      return;
    } else {
      setIdMsg("");
    }
    const regexp2 = /^[a-zA-Z0-9]{4,15}$/;

    if (!regexp2.test(memberId)) {
      setPwMsg("비밀번호 값이 유효하지 않음");
      return;
    } else {
      setPwMsg("");
    }

    axios
      .post("http://localhost/auth/login", {
        memberId: memberId,
        memberPw: memberPw,
      })
      .then((result) => {
        const {
          memberId,
          memberName,
          memberNo,
          accessToken,
          refreshToken,
          email,
        } = result.data;
        console.log(result.data);

        login(memberId, memberName, memberNo, accessToken, refreshToken, email);
        alert("로그인 성공....");
        window.location.href = "/";
      })
      .catch((error) => {
        console.log(error);
        console.group(error.response.data["error-message"]);
        setErrorMsg(error.response.data["error-message"]);
      });
  };
  return (
    <>
      <MemberBodyDiv>
        <LoginFormDiv>
          <LoginTitleDiv>
            <h1>로그인</h1>
          </LoginTitleDiv>
          <LoginTitleForm onSubmit={handleLogin}>
            <LoginContentDiv>
              <InputDiv>
                <InputLabel>아이디</InputLabel>
                <InputForm
                  type="text"
                  onChange={memberIdCheck}
                  placeholder="아이디를 입력하세요"
                />
                <span>{idMsg}</span>
              </InputDiv>
              <InputDiv>
                <InputLabel>비밀번호</InputLabel>
                <InputForm
                  onChange={memberPwCheck}
                  type="password"
                  placeholder="비밀번호를 입력하세요"
                />
                <span>{pwMsg}</span>
              </InputDiv>
              <span>{errorMsg}</span>
              <br />
              <br />
              <InputBtn type="submit">로그인</InputBtn>
            </LoginContentDiv>
          </LoginTitleForm>
        </LoginFormDiv>
      </MemberBodyDiv>
    </>
  );
};

export default MemberLogin;
