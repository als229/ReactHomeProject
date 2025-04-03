import styled from "styled-components";

export const StyledHeaderDiv = styled.header`
  background-color: #ffffba;
  width: 100%;
  height: 80px;
  display: flex;
`;

export const StyledATag = styled.a`
  text-decoration: none;
  color: black;
  display: flex;
  align-items: center;

  &:visited {
    text-decoration: none;
  }
  &:focus {
    text-decoration: none;
  }
  &:hover {
    color: #ffb3ba;
  }
  &:active {
    text-decoration: none;
  }
`;

export const StyledLogoDiv = styled.div`
  width: 10%;
  height: 100%;
  font-size: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 100%;
`;
export const StyledHomeDiv = styled.div`
  width: 10%;
  height: 100%;
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledHomeCenterDiv = styled.div`
  width: 60%;
  height: 100%;
  font-size: 25px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const StyledMemberDiv = styled.div`
  width: 20%;
  height: 100%;
  font-size: 25px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

/*export const Styled  = styled.`


`;
 */
