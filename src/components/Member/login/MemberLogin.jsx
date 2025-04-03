import {
  LoginFormDiv,
  LoginTitleDiv,
  LoginContentDiv,
  LoginTitleForm,
  InputForm,
  InputDiv,
  InputBtn,
  InputLabel,
} from "./MemberLogin.styled";
import { MainBodyDiv } from "/react-home-workspace/react-home-project/src/components/Main/Main.styled";

const MemberLogin = () => {
  return (
    <>
      <MainBodyDiv>
        <LoginFormDiv>
          <LoginTitleDiv>
            <h1>로그인</h1>
          </LoginTitleDiv>
          <LoginTitleForm>
            <LoginContentDiv>
              <InputDiv>
                <InputLabel>이메일</InputLabel>
                <InputForm
                  type="email"
                  id="email"
                  placeholder="이메일을 입력하세요"
                />
              </InputDiv>
              <InputDiv>
                <InputLabel>비밀번호</InputLabel>
                <InputForm
                  type="password"
                  id="password"
                  placeholder="비밀번호를 입력하세요"
                />
              </InputDiv>
              <br />
              <br />
              <InputBtn type="submit">로그인</InputBtn>
            </LoginContentDiv>
          </LoginTitleForm>
        </LoginFormDiv>
      </MainBodyDiv>
    </>
  );
};

export default MemberLogin;
