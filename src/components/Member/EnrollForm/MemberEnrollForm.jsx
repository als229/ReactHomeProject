import {
  LoginTitleDiv,
  InputForm,
  InputDiv,
  InputBtn,
  InputLabel,
} from "../login/MemberLogin.styled";
import { useState } from "react";
import {
  MemberEnrollFormBodyDiv,
  EnrollFormTitleForm,
  EonrollFormDiv,
  EnorllFormContentDiv,
} from "./MemberEnrollForm.styled";

import axios from "axios";
import { useNavigate } from "react-router-dom";

const MemberEnrollForm = () => {
  const [memberId, setMemberId] = useState("");
  const [memberPw, setMemberPw] = useState("");
  const [memberName, setMemberName] = useState("");
  const [email, setEmail] = useState("");
  const [memberPwCheck, setMemberPwCheck] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navi = useNavigate();

  const handleInputId = (e) => {
    setMemberId(e.target.value);
  };

  const handleInputPw = (e) => {
    setMemberPw(e.target.value);
  };

  const handleInputName = (e) => {
    setMemberName(e.target.value);
  };
  const handleInputEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleInputPwCheck = (e) => {
    setMemberPwCheck(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost/members", {
        memberId,
        memberPw,
        memberName,
        email,
      })
      .then((result) => {
        console.log(result);
        if (result.status === 201) {
          alert("회원가입 성공~");
          setTimeout(() => {
            navi("/");
          }, 1000);
        }
      })
      .catch((error) => {
        console.log(error);
        setErrorMsg(error.response.data.memberId);
      });
  };

  return (
    <>
      <MemberEnrollFormBodyDiv>
        <EonrollFormDiv>
          <LoginTitleDiv>
            <h1>회원가입</h1>
          </LoginTitleDiv>
          <EnrollFormTitleForm onSubmit={handleSubmit}>
            <EnorllFormContentDiv>
              <InputDiv>
                <InputLabel>아이디</InputLabel>
                <InputForm
                  type="text"
                  onChange={handleInputId}
                  placeholder="아이디를 입력하세요"
                />
              </InputDiv>
              <InputDiv>
                <InputLabel>비밀번호</InputLabel>
                <InputForm
                  onChange={handleInputPw}
                  type="password"
                  placeholder="비밀번호를 입력하세요"
                />
              </InputDiv>
              <InputDiv>
                <InputLabel>비밀번호 확인</InputLabel>
                <InputForm
                  onChange={handleInputPwCheck}
                  type="password"
                  placeholder="비밀번호를 한번 더 입력하세요"
                />
              </InputDiv>
              <InputDiv>
                <InputLabel>이름</InputLabel>
                <InputForm
                  type="text"
                  onChange={handleInputName}
                  placeholder="이름을 입력하세요"
                />
              </InputDiv>
              <InputDiv>
                <InputLabel>Email</InputLabel>
                <InputForm
                  type="email"
                  onChange={handleInputEmail}
                  placeholder="이메일을 입력하세요"
                />
              </InputDiv>
              <br />
              <br />
              <InputBtn type="submit">가입하기</InputBtn>
            </EnorllFormContentDiv>
          </EnrollFormTitleForm>
        </EonrollFormDiv>
      </MemberEnrollFormBodyDiv>
    </>
  );
};

export default MemberEnrollForm;
