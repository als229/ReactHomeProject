import styled from "styled-components";

export const MainDetailDiv = styled.div`
  width: 35%;
  margin-top: 30px;
  height: 840px;
  border: 1px solid rgb(211, 200, 200);
  border-radius: 10px;
`;

export const MainDetailTtitleDiv = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border-bottom: 1px solid rgb(211, 200, 200);
`;

export const MainDetailContentDiv = styled.div`
  height: 90%;
  width: 100%;
`;
export const MainDetailImgDiv = styled.div`
  height: 50%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
export const MainDetailInnerContentDiv = styled.div`
  height: 40%;
  width: 90%;
  padding: 30px;
  white-space: normal;
  word-break: break-all;
  word-wrap: break-word;
  font-size: 30px;
`;

export const DetailImg = styled.img`
  width: 400px;
  height: 370px;
  border-radius: 10px; /* 둥글게 만들고 싶다면 추가 */
`;
