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
} from "./MyPage.styled";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const MyPage = () => {
  const { auth, logout } = useContext(AuthContext);
  const navi = useNavigate();

  const deleteMember = (e) => {
    e.preventDefault();
    if (confirm("정말 탈퇴하시겠습니까??")) {
      axios
        .delete(`http://localhost/members/${auth.memberNo}`, {
          headers: {
            Authorization: `Bearer ${auth.accessToken}`,
          },
        })
        .then(() => {
          alert("탈퇴 완료...");
          logout;
          navi("/");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  return (
    <>
      <MemberEnrollFormBodyDiv>
        <EonrollFormDiv>
          <LoginTitleDiv>
            <h1>마이페이지</h1>
          </LoginTitleDiv>
          <EnrollFormTitleForm>
            <EnorllFormContentDiv>
              <InputDiv>
                <InputLabel>아이디</InputLabel>
                <InputForm type="text" value={auth.memberId} disabled />
              </InputDiv>
              <InputDiv>
                <InputLabel>이름</InputLabel>
                <InputForm type="text" value={auth.memberName} disabled />
              </InputDiv>
              <InputDiv>
                <InputLabel>Email</InputLabel>
                <InputForm type="email" value={auth.email} disabled />
              </InputDiv>
              <br />
              <br />
              <InputBtn onClick={() => navi("/updateForm")}>수정하기</InputBtn>
              <br />
              <InputBtn
                onClick={deleteMember}
                style={{ backgroundColor: "orangered" }}
              >
                탈퇴하기
              </InputBtn>
            </EnorllFormContentDiv>
          </EnrollFormTitleForm>
        </EonrollFormDiv>
      </MemberEnrollFormBodyDiv>
    </>
  );
};

export default MyPage;
