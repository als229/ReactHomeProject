import ImageSlider from "./imgSlider/ImgSlider";
import MainMungMung from "./MainMungMung/MainMungMung";
import MainDetail from "./MainDetail/MainDetail";
import { MainBodyDiv } from "./Main.styled";

const Main = () => {
  return (
    <>
      <br />
      <ImageSlider />
      <MainBodyDiv>
        <MainMungMung></MainMungMung>
        <MainDetail></MainDetail>
      </MainBodyDiv>
    </>
  );
};

export default Main;
