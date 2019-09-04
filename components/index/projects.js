import React from 'react';

import {PageDiv, SectionTitle, BodyText} from '../styles';
import styled from 'styled-components';
import breakpoints from '../breakpoints';

const ProjectBodyText = styled(BodyText)`

  margin:0;

`

const ProjectDiv = styled.div`
  background:#fff;
  border-radius: 8px;
  margin-bottom:16px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 5px 0px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 3px 1px -2px;

  padding: 28px 16px;

  @media ${breakpoints.sm} {
    padding: 32px 24px;
  }

  @media ${breakpoints.md} {
    padding: 32px 48px;
  }
`

const ProjectTitle = styled(SectionTitle)`
  font-size: 22px;
`

const ProjectContent = styled.div`
  
  margin: 16px 0 32px;
  
  @media ${breakpoints.lg} {
    display: flex;
    justify-content: space-between;
  }
`

const ProjectImg = styled.img`

  margin: 32px auto 0;
  display:block;

  border-radius: 4px;
  
  max-width: 100%;

  @media ${breakpoints.sm} {

  }

  @media ${breakpoints.lg} {
    margin: auto;
    margin-left:32px;
    max-width: 512px;
  }
`

const Projects = ({ forwardRef, lang }) => (
  <PageDiv ref={forwardRef}>
    <SectionTitle>{lang.projects.title}</SectionTitle>
    <Project title="Zelt Studio" img="/static/zeltstudio-web.png" link="https://zeltstudio.com">
      <ProjectBodyText>{lang.projects.zeltStudioBody}</ProjectBodyText>
    </Project>

    <Project title="Snapdrev" img="/static/snapdrev-web.png" link="https://github.com/xQazer/SnapDrev">
      <ProjectBodyText>{lang.projects.snapDrevBody}</ProjectBodyText>
    </Project>

    <Project title="Exec Lux" img="/static/execlux-web.png" link="https://github.com/xQazer/ExecLux">
      <ProjectBodyText>{lang.projects.execLuxBody}</ProjectBodyText>
    </Project>
  </PageDiv>
)

const Project = ({title, children, img, link}) => {

  return  (
    <ProjectDiv>
      <ProjectTitle>
        {title}
      </ProjectTitle>

      <ProjectContent>  
        <div>
          {children}
          <br />
          <a href={link} rel='noopener noreferrer' target='_blank'>{link}</a>
        </div>
        <ProjectImg src={img} />
      </ProjectContent>

    </ProjectDiv>
  )
}

export default Projects;