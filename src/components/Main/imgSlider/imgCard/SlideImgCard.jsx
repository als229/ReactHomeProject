import { SlideImg, SlideTtitleSpan, SlideHeartSpan } from "../ImgSlider.styled";

const SlideImgCard = () => {
  return (
    <>
      <SlideTtitleSpan>우리애 이쁘쥬</SlideTtitleSpan>
      <SlideHeartSpan>♥ 145</SlideHeartSpan>
      <SlideImg src="/멍멍이1.webp" alt="Slide 1" className="slide-image" />
    </>
  );
};

export default SlideImgCard;
