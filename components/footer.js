import React from 'react';
import styled from 'styled-components';

const Main = styled.div`
  
  padding:64px 128px;
  background: ${props => props.whiteBackground ? "#fff" : "#f6f6f6"};
`

const Row = styled.div`
  display:flex;
  justify-content:center;
`

const Link = styled.a`
  font-size: 18px;
  color: #000;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  &:not(:last-child) {
    border-right: 2px solid #333;
  }

  padding: 2px 32px;
`

const chars = ".abcdefghijklmnopqrstuvwxyz@";
const ciphered = [10, 15, 14, 1, 19, 0, 18, 5, 9, 20, 5, 12, 27, 7, 13, 1, 9, 12, 0, 3, 15, 13];

const Footer = ({whiteBackground}) => {

  const [email, setEmail] = React.useState();
  const [time, setTime] = React.useState(new Date().getTime() + 4000);

  const Decode = _ => {
    let arr = [];
    for(let i = 0; i < ciphered.length; i++){
      arr[i] = chars.charAt(ciphered[i]);
    }
    arr[0] = arr[0].toUpperCase();
    setEmail(arr.join(''));
  }

  React.useEffect(() => {

    let interval = setInterval(() => {
      if(time > new Date().getTime()) return;
      Decode();
      clearInterval(interval);
    }, 500);

  })


  return (
    <Main whiteBackground={whiteBackground}>
      <Row>
        <Link href="https://github.com/xqazer" target='_blank'>Github</Link>
      </Row>
      <Row>
        {email && <Link href={`mailto:${email}`} target='_blank'>{email}</Link>}
        {!email && <Link onClick={Decode}>Vis email</Link>}
      </Row>
    </Main>
  )
}

export default Footer;