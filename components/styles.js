import styled from 'styled-components';
import breakpoints from '../components/breakpoints';

export const FullHeightDiv = styled.div`
  height: 100vh;
  background-image: url(/static/bg1.png);
  background-position: 50%;
  background-size: cover;
`

export const PageDiv = styled.div`
  background: ${props => props.whiteBackground ? "#fff" : "#f6f6f6"};

  padding: 96px 16px;

  @media ${breakpoints.md} {
    padding: 96px 64px;
  }

  @media ${breakpoints.xl} {
    padding: 96px 256px;
  }
`

export const SectionTitle = styled.h3`
  font-size: 26px;
  margin-top: 0;
  font-weight: 400;
`
export const BodyText = styled.p`
  white-space: pre-line;
`

export const SubtitleText = styled.p`
  font-size: 22px;
  margin-bottom: .35em;
`

const Button = styled.a`
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