import React from 'react';

import { PageDiv, SectionTitle, BodyText } from '../styles';

const AboutMe = ({ forwardRef, lang }) => (
  <PageDiv ref={forwardRef}>
    <SectionTitle>{lang.aboutMe.title}</SectionTitle>
    <BodyText>{lang.aboutMe.body}</BodyText>
  </PageDiv>
)

export default AboutMe;