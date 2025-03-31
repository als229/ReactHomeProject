import {
  StyledHeaderDiv,
  StyledHomeDiv,
  StyledATag,
  StyledHomeCenterDiv,
  StyledMemberDiv,
  StyledLogoDiv,
} from "./Header.styles";
import { RiHomeHeartLine } from "react-icons/ri";
import { FaDog } from "react-icons/fa6";
import { VscCoffee } from "react-icons/vsc";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineEventNote } from "react-icons/md";
import { RiLoginBoxLine } from "react-icons/ri";
import { RiLogoutBoxLine } from "react-icons/ri";
import { IoMdPersonAdd } from "react-icons/io";
import { IoPersonCircleOutline } from "react-icons/io5";
import { SiDatadog } from "react-icons/si";

import { useNavigate } from "react-router-dom";

const Header = () => {
  return (
    <>
      <StyledHeaderDiv>
        <StyledLogoDiv>
          <SiDatadog />
        </StyledLogoDiv>
        <StyledHomeDiv>
          <StyledATag>
            <RiHomeHeartLine /> home
          </StyledATag>
        </StyledHomeDiv>
        <StyledHomeCenterDiv>
          <StyledATag href="">
            <FaDog /> 내 새끼 자랑 게시판
          </StyledATag>
          <StyledATag href="">
            <FaRegHeart /> 같이 산책 게시판
          </StyledATag>
          <StyledATag href="">
            <VscCoffee /> 우리 동네 강아지 까페
          </StyledATag>
          <StyledATag href="">
            <MdOutlineEventNote /> 공지사항
          </StyledATag>
        </StyledHomeCenterDiv>
        <StyledMemberDiv>
          <StyledATag href="">
            <RiLoginBoxLine /> 로그인
          </StyledATag>
          <StyledATag href="">
            <IoMdPersonAdd /> 회원가입
          </StyledATag>
          <StyledATag href="">
            <IoPersonCircleOutline /> 마이페이지
          </StyledATag>

          <StyledATag href="">
            <RiLogoutBoxLine /> 로그아웃
          </StyledATag>
        </StyledMemberDiv>
      </StyledHeaderDiv>
    </>
  );
};

export default Header;
