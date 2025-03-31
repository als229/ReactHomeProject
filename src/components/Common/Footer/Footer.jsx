import { StrledFooterDiv, StyledFooterLogoDiv, StyledFooterContentDiv } from "./Footer.styles";
import { SiDatadog } from "react-icons/si";

const Footer = () => {
  return (
    <>
      <hr />
      <StrledFooterDiv>
        <StyledFooterLogoDiv>
          <SiDatadog/>
        </StyledFooterLogoDiv>
        <StyledFooterContentDiv>
          Copyright © 1994-2025 KKM MungMungWalWal ~
        </StyledFooterContentDiv>
      </StrledFooterDiv>
    </>
  );
};

export default Footer;
