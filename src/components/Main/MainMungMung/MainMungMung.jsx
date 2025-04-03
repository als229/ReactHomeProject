import {
  MainMungMungContainer,
  MainMungMungTtitleDiv,
  MainMungMungCardDiv,
} from "./MainMungMung.styled";

import { FaFireAlt } from "react-icons/fa";

import MainMungMungCard from "./MainMungMungCard/MainMungMungCard";

const MainMungMung = () => {
  return (
    <>
      <MainMungMungContainer>
        <MainMungMungTtitleDiv>
          <h1>
            <FaFireAlt /> 이번달 핫한 강아지 <FaFireAlt />
          </h1>
        </MainMungMungTtitleDiv>
        <MainMungMungCardDiv>
          <MainMungMungCard></MainMungMungCard>
          <MainMungMungCard></MainMungMungCard>
          <MainMungMungCard></MainMungMungCard>
          <MainMungMungCard></MainMungMungCard>
        </MainMungMungCardDiv>
      </MainMungMungContainer>
    </>
  );
};

export default MainMungMung;
