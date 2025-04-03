import {
  SlideImg,
  SlideTtitleDiv,
  SlideHeartDiv,
  SlideContainerDiv,
} from "../ImgSlider.styled";

const SlideImgCard = () => {
  return (
    <>
      <SlideContainerDiv>
        <SlideTtitleDiv>우리애 이쁘쥬</SlideTtitleDiv>
        <SlideHeartDiv>♥ 145</SlideHeartDiv>
      </SlideContainerDiv>
      <SlideImg src="/멍멍이1.webp" alt="Slide 1" className="slide-image" />
    </>
  );
};

export default SlideImgCard;
