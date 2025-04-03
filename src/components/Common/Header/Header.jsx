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
          <StyledATag href="/">
            <RiHomeHeartLine style={{ "margin-right": "4px" }} /> home
          </StyledATag>
        </StyledHomeDiv>
        <StyledHomeCenterDiv>
          <StyledATag href="">
            <FaDog style={{ "margin-right": "4px" }} /> 내 새끼 자랑 게시판
          </StyledATag>
          <StyledATag href="">
            <FaRegHeart style={{ "margin-right": "4px" }} /> 같이 산책 게시판
          </StyledATag>
          <StyledATag href="">
            <VscCoffee style={{ "margin-right": "4px" }} /> 우리 동네 강아지
            까페
          </StyledATag>
          <StyledATag href="">
            <MdOutlineEventNote style={{ "margin-right": "4px" }} /> 공지사항
          </StyledATag>
        </StyledHomeCenterDiv>
        <StyledMemberDiv>
          <StyledATag href="/login">
            <RiLoginBoxLine style={{ "margin-right": "4px" }} /> 로그인
          </StyledATag>
          <StyledATag href="">
            <IoMdPersonAdd style={{ "margin-right": "4px" }} /> 회원가입
          </StyledATag>
          <StyledATag href="">
            <IoPersonCircleOutline style={{ "margin-right": "4px" }} />{" "}
            마이페이지
          </StyledATag>

          <StyledATag href="">
            <RiLogoutBoxLine style={{ "margin-right": "4px" }} /> 로그아웃
          </StyledATag>
        </StyledMemberDiv>
      </StyledHeaderDiv>
    </>
  );
};

export default Header;
