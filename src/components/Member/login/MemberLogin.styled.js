import styled from "styled-components";

export const MemberBodyDiv = styled.div`
  width: 100%;
  height: 700px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const LoginFormDiv = styled.div`
  width: 30%;
  height: 60%;
  border-radius: 10px;
  background-color: rgb(253, 219, 221);
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;

export const LoginTitleDiv = styled.div`
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const LoginTitleForm = styled.form`
  width: 100%;
  height: 400px;
`;

export const LoginContentDiv = styled.div`
  width: 100%;
  height: 80%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const InputDiv = styled.div`
  width: 100%;
  height: 80%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const InputForm = styled.input`
  font-size: 20px;
  width: 80%;
  height: 50px;
  border-radius: 10px;
`;

export const InputBtn = styled.button`
  width: 90%;
  height: 70px;
  border-radius: 10px;
  background-color: #ffffba;
  font-family: "Ownglyph_ParkDaHyun";
  font-size: 20px;

  &:hover {
    color: #ffb3ba;
    cursor: pointer;
  }
`;

export const InputLabel = styled.label`
  border-radius: 10px;
  font-size: 20px;
`;
