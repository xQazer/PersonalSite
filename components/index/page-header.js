import React from 'react';

import breakpoints from '../breakpoints';
import styled, { keyframes } from 'styled-components';
import {FullHeightDiv} from '../styles';

const HeaderTitle = styled.h4`
  font-size: 36px;    
  font-weight: 300;
  margin: 16px 0;

  @media (min-width: 400px){
    font-size: 40px;    
  }
`

const HeaderSubtitle = styled.p`
  font-size: 18px;
  margin: 8px 0;
  @media (min-width: 400px){
    font-size: 23px;
  }
`

const HeaderCenter = styled.div`

  max-width: 800px;
  width: 100%;
  margin: auto;


  position: absolute;
  transform: translateX(0) translateY(-50%);

  top: 33vh;
  
  text-align: center;

  @media ${breakpoints.md} {
    padding-left: 128px;  
    text-align: left;
  }

  @media ${breakpoints.lg} {
    left: 15%;
    top: 50%;
    padding-left: 0;
  }
`

const HeaderImg = styled.img`
  background:#ccc;

  border-radius: 50%;
  width: 256px;
  height: 256px;
  max-width: 45vw;
  max-height: 45vw;

  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 5px 0px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 3px 1px -2px;

  position: absolute;
  

  transform: translateX(-50%) translateY(0);
  bottom: 15vh;
  left: 50%;

  @media ${breakpoints.md} {
    transform: translateX(0) translateY(0);

    left: 128px;
  }

  @media ${breakpoints.lg} {
    
    transform: translateX(0) translateY(-50%);

    top: 50%;
    right: 10%;
    left: unset;

  }


  @media ${breakpoints.xl} {
    width: 384px;
    height: 384px;
  }
`
const ShowMoreIconKeyframes = keyframes`
  from {
    bottom: 10px;
  }

  to {
    bottom: -10px;
  }
`;

const ShowMoreIcon = styled.span`
  position: absolute;

  /* transform: translateX(-50%) translateY(-50%); */

  width: 24px;
  height: 24px;

  border-left: 2px solid #333;
  border-bottom: 2px solid #333;

  transition: width 200ms, height 200ms;

  transform: rotate(-45deg);
  box-sizing: border-box;
`

const ShowMoreButton = styled.div`

  position: absolute;
  bottom: 0;
  left:50%;

  width: 26px;
  height: 26px;
  padding: 8px 24px 24px 24px;

  transform: translateX(-50%) translateY(-50%);
  animation: ${ShowMoreIconKeyframes} 2s ease-in-out infinite alternate;

  transition: width 200ms, height 200ms;

  cursor:pointer;

  &:hover ${ShowMoreIcon} {
    width: 32px;
    height: 32px;
  }

  &:hover {
    width: 34px;
    height: 34px;
  }

`

const PageHeader = ({onShowMoreClick, lang}) => (
  <FullHeightDiv withBackground>

    <HeaderCenter>

      <HeaderTitle>Jonas Reitel Høyer</HeaderTitle>
      <HeaderSubtitle>{lang.pageHeader.subtile}</HeaderSubtitle>

    </HeaderCenter>

    {/* <HeaderImg src="" /> */}

    <ShowMoreButton onClick={onShowMoreClick} >
      <ShowMoreIcon/>
    </ShowMoreButton>

  </FullHeightDiv>
)

export default PageHeader;