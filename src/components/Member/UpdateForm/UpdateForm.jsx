import {
  LoginTitleDiv,
  InputForm,
  InputDiv,
  InputBtn,
  InputLabel,
} from "../login/MemberLogin.styled";
import {
  MemberEnrollFormBodyDiv,
  EnrollFormTitleForm,
  EonrollFormDiv,
  EnorllFormContentDiv,
} from "./UpdateForm.styled";
import { AuthContext } from "../../context/AuthContext";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UpdateForm = () => {
  const { auth, login } = useContext(AuthContext);
  const navi = useNavigate();
  const [memberId, setMemberId] = useState("");
  const [memberName, setMemberName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    setMemberId(auth.memberId);
    setMemberName(auth.memberName);
    setEmail(auth.email);
  }, [auth]);

  const updateMember = (e) => {
    e.preventDefault();
    axios
      .put(
        "http://localhost/members",
        {
          memberName: memberName,
          email: email,
          memberNo: auth.memberNo,
          memberId: auth.memberId,
          memberPw: password,
        },
        {
          headers: {
            Authorization: `Bearer ${auth.accessToken}`,
          },
        }
      )
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
        alert("수정 성공...");
        window.location.href = "/";
      })
      .catch((error) => {
        console.log(error);
        alert(
          error.response.data["error-message"] || "비밀번호 변경 중 오류 발생"
        );
      });
  };

  return (
    <>
      <MemberEnrollFormBodyDiv>
        <EonrollFormDiv>
          <LoginTitleDiv>
            <h1>수정하기</h1>
          </LoginTitleDiv>
          <EnrollFormTitleForm>
            <EnorllFormContentDiv>
              <InputDiv>
                <InputLabel>아이디</InputLabel>
                <InputForm type="text" value={memberId} disabled />
              </InputDiv>
              <InputDiv>
                <InputLabel>이름</InputLabel>
                <InputForm
                  type="text"
                  value={memberName}
                  onChange={(e) => setMemberName(e.target.value)}
                />
              </InputDiv>
              <InputDiv>
                <InputLabel>Email</InputLabel>
                <InputForm
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </InputDiv>
              <InputDiv>
                <InputLabel>비밀번호</InputLabel>
                <InputForm
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </InputDiv>
              <br />
              <br />
              <InputBtn onClick={updateMember}>수정하기</InputBtn>
              <br />
            </EnorllFormContentDiv>
          </EnrollFormTitleForm>
        </EonrollFormDiv>
      </MemberEnrollFormBodyDiv>
    </>
  );
};

export default UpdateForm;
