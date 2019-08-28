import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Link from 'next/link';
import breakpoints from '../components/breakpoints';

const Main = styled.div`
  
  position:fixed;
  top:0;
  left:0;
  right:0;

  background: ${props => props.scrollY > 0 ? "#ffffffee" : "#ffffff00" };
  transition: background .5s;
  min-height: 64px;

  display:flex;
  align-items: center;

  z-index: 1000;

  padding: 1px 32px;

  @media ${breakpoints.md} {
    padding: 1px 92px;
  }

  @media ${breakpoints.lg} {
    padding: 1px 256px;
  }
`

const FlexSpacer = styled.div`
  flex: 1 1 auto;
`

const Title = styled.h3`
  font-weight: 300;
  margin: 0;
  cursor: pointer;

  font-size: 24px;


  @media ${breakpoints.sm}{
    font-size: 28px;

  }
`

const LinkA = styled.a`

  font-size: 16px;
  padding: 2px 8px;

  color: #000;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  @media ${breakpoints.sm}{
    font-size: 18px;
    padding: 2px 32px;
  }
`

const NavLink = styled(LinkA)`
  display: none;
  @media ${breakpoints.sm} {
    display: inline;
  }
`

const MenuIconLine = styled.div`

  position: absolute;
  width: 26px;
  height: 2px;
  background:#333;
  transition: all .5s;

  &:nth-child(1) {
    top: 14px;
  }

  &:nth-child(2) {
    top: 50%;
  }

  &:nth-child(3) {
    bottom: 13px;
  }
`


const MenuIcon = styled.a`
  cursor: pointer;

  position: relative;
  width: 26px;
  height: 26px;

  padding: 12px;

  @media ${breakpoints.sm} {
    display: none;
  }

  ${props => props.isMenuOpen && `
    & ${MenuIconLine}:nth-child(1) {
    top:  50%;
    transform: rotate(45deg);
  }

  & ${MenuIconLine}:nth-child(2) {
    top: 50%;
    transform: rotate(-45deg);
  }

  & ${MenuIconLine}:nth-child(3) {
    bottom: 50%;
    transform: rotate(45deg);
    background: #ffffff00;
  }
  `}

  
`

const Menu = styled.div`

  display:block;
  position:absolute;
  top: 66px;
  left:0;
  right:0;
  max-height: ${props => props.isMenuOpen ? '216px' : '0'};

  background: ${props => props.scrollY > 0 ? "#ffffffee" : "#ffffff00" };
  transition: background .5s, max-height .5s;

  overflow: hidden;

  @media ${breakpoints.sm} {
    display: none;
  }
`

const MenuLink = styled(NavLink)`
  display: block;
  font-size: 18px;
  margin: 0 22px 6px;

`


const Header = ({items, isHomepage}) => {

  const [scrollY,setScrollY] = React.useState(0);
  const [isMenuOpen, setMenuOpen] = React.useState(false);

  

  const scrollToTop = () =>
    window.scrollTo({left: 0, top: 0, behavior:'smooth'});

  const scrollToRef = (ref) => {
    const offsetTop = ref.current.offsetTop - 66;
    window.scrollTo({left: 0, top: offsetTop, behavior:'smooth'});
  }

  React.useEffect(()=>{
    setScrollY(window.scrollY);
  }, []);

  React.useEffect(()=> {

    const scrollUpdate = () => {
      setScrollY(window.scrollY);
      if(isMenuOpen) setMenuOpen(false);
    }

    window.addEventListener('scroll', scrollUpdate);

    return () => {
      window.removeEventListener('scroll', scrollUpdate);
    }
  }, [setMenuOpen, isMenuOpen])

  return (
    <Main scrollY={scrollY}>

      {isHomepage && <Title onClick={scrollToTop}>Jonas Høyer</Title>}

      {!isHomepage && <Link href="/">
        <Title>Jonas Høyer</Title>
      </Link>}

      <FlexSpacer />

      <div>
        {items.map(e => (
          <NavLink key={e.name} onClick={_ => scrollToRef(e.ref)}>{e.name}</NavLink>
        ))}
      </div>

      <MenuIcon onClick={_ => setMenuOpen(!isMenuOpen)} isMenuOpen={isMenuOpen}>
        <MenuIconLine />
        <MenuIconLine />
        <MenuIconLine />
      </MenuIcon>

      <Menu isMenuOpen={isMenuOpen} scrollY={scrollY}>
        {items.map(e => (
          <MenuLink key={e.name} onClick={_ => scrollToRef(e.ref)}>{e.name}</MenuLink>
        ))}
      </Menu>


    </Main>
  )
}

export default Header;