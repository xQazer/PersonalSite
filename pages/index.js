import React from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
import Head from 'next/head'

import PageHeader from '../components/index/page-header';
import AboutMe from '../components/index/about-me';
import Skills from '../components/index/skills';
import Projects from '../components/index/projects';

import useLang from '../components/lang';

const Index = () => {

  const lang = useLang('da');

  const refAboutMe = React.useRef();
  const refSkills = React.useRef();
  const refProjects = React.useRef();

  const scrollToTop = () =>
    window.scrollTo({left: 0, top: 0, behavior:'smooth'});


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

      <Header
        isHomepage
        scrollToTop={scrollToTop}
        scrollToRef={scrollToRef}
        items={[{name:lang.aboutMe.navTile, ref:refAboutMe}, {name:lang.skills.navTile,ref:refSkills},{name:lang.projects.navTile, ref: refProjects}]} />

      <PageHeader onShowMoreClick={_=> scrollToRef(refAboutMe)} lang={lang} />
      <AboutMe forwardRef={refAboutMe} lang={lang}  />
      <Skills forwardRef={refSkills} lang={lang}  />    
      <Projects forwardRef={refProjects} lang={lang}  />

      <Footer whiteBackground/>

    </div>
  )
}

export default Index;