import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  padding-left: 15px !important;
  padding-right: 15px !important;
  width: 58.3%;

  @media screen and (max-width: 720px) {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;

export const Text = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 28.4px;
  line-height: 39px;
  color: #00484C;
  gap: 4px;

  @media screen and (max-width: 720px) {
    width: 100%;
    margin-top: 2rem;
  }
`;

export const SubTitle = styled.h2`
  margin-top: 30px;
  margin-bottom: 20px;
  color: rgb(255, 255, 255);
  font-size: 48px;
  font-weight: bold;
  line-height: 46px;

  @media screen and (max-width: 720px) {
    width: 100%;
    font-weight: 900;
    font-size: 24px;
    line-height: 28px;
  }

`;

export const Paragraph = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: rgb(0, 0, 0);
  max-width: 569px;

  @media screen and (max-width: 720px) {
    width: 100%;
    margin-bottom: 3rem;

  }


`;

export const ImgSeta = styled.img`
  float: right;
  margin-top: -30px;

  @media screen and (max-width: 720px) {
    display: none;
  }
`;