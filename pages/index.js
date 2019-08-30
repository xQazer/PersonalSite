import React from 'react';
import styled, { keyframes } from 'styled-components';
import Footer from '../components/footer';
import Header from '../components/header';
import breakpoints from '../components/breakpoints';
import Head from 'next/head'

const FullHeightDiv = styled.div`
  height: 100vh;
  background-image: url(/static/bg1.png);
  background-position: 50%;
  background-size: cover;
`

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

const PageDiv = styled.div`
  background: ${props => props.whiteBackground ? "#fff" : "#f6f6f6"};

  padding: 96px 16px;

  @media ${breakpoints.md} {
    padding: 96px 64px;
  }

  @media ${breakpoints.xl} {
    padding: 96px 256px;
  }
`

const PageTitle = styled.h3`
  font-size: 26px;
  margin-top: 0;
  font-weight: 400;
`
const BodyText = styled.p`
  white-space: pre-line;
`

const SubtitleText = styled.p`
  font-size: 22px;
  margin-bottom: .35em;
`


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

const ProjectTitle = styled(PageTitle)`
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


const ButtonText = styled.a`
  display: inline-block;
  background: #666;
  color: #fff;
  font-weight:500;
  padding: 8px 32px;
  margin: 12px 0;
  border-radius: 6px;
  font-size: 18px;
  text-decoration:none;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 5px 0px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 3px 1px -2px;

  transition: all 200ms;

  &:hover {
    background: #888;
    color: #eee;
  }
`


const Index = () => {

  const refOmMig = React.useRef();
  const refSkills = React.useRef();
  const refProjekter = React.useRef();

  const scrollToRef = (ref) => {
    const offsetTop = ref.current.offsetTop - 66;
    window.scrollTo({left: 0, top: offsetTop, behavior:'smooth'});
  }
  
  return (
    <div>

    <Head>
      <title>Jonas Reitel Høyer - Fullstack</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" type="image/x-icon" href="/static/favicon.ico" />
    </Head>

    <style jsx global>{`
      body { 
        margin: 0;
        font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        overflow-x: hidden;
      }
    `}</style>

      <Header isHomepage items={[{name:'Om mig', ref:refOmMig}, {name:"Kompetencer",ref:refSkills},{name:'Projekter', ref: refProjekter}]} />

      <FullHeightDiv withBackground>

        <HeaderCenter>

          <HeaderTitle>Jonas Reitel Høyer</HeaderTitle>
          <HeaderSubtitle>Selvlært fullstack programmør</HeaderSubtitle>

        </HeaderCenter>

        {/* <HeaderImg src="" /> */}

        <ShowMoreButton onClick={_=>scrollToRef(refOmMig)} >
          <ShowMoreIcon/>
        </ShowMoreButton>

      </FullHeightDiv>

      <PageDiv ref={refOmMig}>
        <PageTitle>Om mig</PageTitle>
        <BodyText>{`Mit navn er Jonas Reitel Høyer, jeg er 20 år gammel og bor i Slagelse. Jeg har for nyligt afsluttet min gymnasiale uddannelse på HTX Slagelse. Mine linjefag på gymnasiet har inkluderet matematik, fysik og teknikfag på A niveau. Jeg er meget matematisk-logisk tænkende. Jeg har været interesseret i programmering siden jeg var 7 år gammel og har målrettet udvidet mine kompetencer indenfor dette felt. 
        `}</BodyText>
      </PageDiv>

      <PageDiv ref={refSkills} whiteBackground>
        <PageTitle>Kompetencer og evner</PageTitle>
        <BodyText>{`Programmering har interesseret mig siden jeg var ganske lille. Jeg startede at udvikle spil i Gamemaker, mens jeg gik i grundskolens første klasser. Senere skiftede jeg til Unity. Jeg har brugt Unity siden 2014 og har dermed over 5 års erfaring med C# og Unity. Jeg har udviklet websider siden 2016, først med basal HTML, CSS og JS, senere med React og Node, som jeg har mere end 2 års erfaring med.
        `}</BodyText>
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
            <SubtitleText>Andet</SubtitleText>
            <BodyText>{`C#, Unity
            Google Cloud Platform, Amazon Web Services
            Mochajs
            Adobe Photoshop
            `}</BodyText>
          </FlexCol>
        </FlexRow>
        {/* <ButtonText href='/static/cv_test.pdf' target='_blank'>Vis CV</ButtonText> */}
      </PageDiv>

      <PageDiv ref={refProjekter}>
        <PageTitle>Projekter</PageTitle>
        <Project title="Zelt Studio" img="/static/zeltstudio-web.png" link="https://zeltstudio.com">
          <ProjectBodyText>{`Jeg udvikler og udgiver mobilspil under navnet Zelt Studio. Spillene bliver udviklet med Unity, og C# bliver brugt som kodesprog. Forskellige SDK er også integreret i spilenel, som f.eks. Google's Firebase SDK for tracking.

          Apps er udviklet med Unity C#. Webside lavet med HTML, CSS og Javascript.
          `}</ProjectBodyText>
        </Project>

        <Project title="Snapdrev" img="/static/snapdrev-web.png" link="https://github.com/xQazer/SnapDrev">
          <ProjectBodyText>{`SnapDrev er et backup-program, der gemmer mapper og filer. SnapDrev gemmer alle filer i skyen, som er zipped og krypteret med AES. SnapDrev bliver kun brugt til personligt behov, men er lavet til kommerciel brug, med system for at betale efter brug af service, og login-system ved brug af JWT.

            Frontend: ReactJS.
            Backend: NodeJS, MongoDB.
            Understøttelse for Google cloud storage.
            Desktop App: ElectronJS, ReactJS.
          `}</ProjectBodyText>
        </Project>

        <Project title="Exec Lux" img="/static/execlux-web.png" link="https://github.com/xQazer/ExecLux">
          <ProjectBodyText>{`Exec Lux styrer noter, to-dos, tidsforbrug og kodeord. Alt data bliver krypteret med AES. Projektet bruges kun personligt, som projekt- og kodeordmanager.

            Frontend: ReactJS.
            Backend: NodeJS, MongoDB.
          `}</ProjectBodyText>
        </Project>
      </PageDiv>

      <Footer whiteBackground/>

    </div>
  )
}

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

export default Index;