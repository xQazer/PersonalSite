import React from 'react';

import {PageDiv, SectionTitle, BodyText, SubtitleText} from '../styles';
import styled from 'styled-components';
import breakpoints from '../breakpoints';

const FlexRow = styled.div`

  @media ${breakpoints.sm} {
    display:flex;
  }
`

const FlexCol = styled.div`
  @media ${breakpoints.sm} {
    padding-right: 64px;
  }
`

const Skills = ({forwardRef, lang}) => (
  <PageDiv ref={forwardRef} whiteBackground>
    <SectionTitle>{lang.skills.title}</SectionTitle>
    <BodyText>{lang.skills.body}</BodyText>
    <FlexRow>
      <FlexCol>
        <SubtitleText>Frontend</SubtitleText>
        <BodyText>{`HTML, CSS, Javascript
              ReactJS, GatsbyJS, Next.js, ElectronJS
              ReactNative
              `}</BodyText>
      </FlexCol>
      <FlexCol>
        <SubtitleText>Backend</SubtitleText>
        <BodyText>{`Node.js, Express.js
              MongoDB
              MySQL
              `}</BodyText>
      </FlexCol>
      <FlexCol>
        <SubtitleText>{lang.skills.other}</SubtitleText>
        <BodyText>{`C#, Unity
              Google Cloud Platform, Amazon Web Services
              Mochajs
              Adobe Photoshop
              `}</BodyText>
      </FlexCol>
    </FlexRow>
    {/* <Button href='/static/cv_test.pdf' target='_blank'>Vis CV</Button> */}
  </PageDiv>

)


export default Skills;