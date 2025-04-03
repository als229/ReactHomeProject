import {
  MainDetailDiv,
  MainDetailTtitleDiv,
  MainDetailContentDiv,
  MainDetailImgDiv,
  MainDetailInnerContentDiv,
  DetailImg,
} from "./MainDetail.styed";

const MainDetail = () => {
  return (
    <>
      <MainDetailDiv>
        <MainDetailTtitleDiv>
          <h1>ㅎㅇㅎㅇ 내 강아지 이쁘지?</h1>
        </MainDetailTtitleDiv>
        <MainDetailContentDiv>
          <MainDetailImgDiv>
            <DetailImg src="멍멍이1.webp" alt="" />
          </MainDetailImgDiv>
          <MainDetailInnerContentDiv>
            우리집 강아지는 겁나 귀여운 강아지 학교 갔다 돌아오면 멍멍멍
            짱귀엽주 잘 지내니? 멍멍 왈왈 너무 귀엽쥬 우리집 강아지는 겁나
            귀여운 강아지 학교 갔다 돌아오면 멍멍멍 짱귀엽주 잘 지내니? 멍멍
            왈왈 너무 귀엽쥬 우리집 강아지는 겁나 귀여운 강아지 학교 갔다
            돌아오면 멍멍멍 짱귀엽주 잘 지내니? 멍멍 왈왈 너무 귀엽쥬
          </MainDetailInnerContentDiv>
        </MainDetailContentDiv>
      </MainDetailDiv>
    </>
  );
};

export default MainDetail;
