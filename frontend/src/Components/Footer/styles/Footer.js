import styled from 'styled-components';

export const Container = styled.div`
  padding: 40px 20px;
  background: radial-gradient(circle, rgb(247, 74, 232) 0%, rgb(116, 4, 106) 100%);
`
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
`
export const Column = styled.div`
display: flex;
flex-direction: column;
text-align: left;
margin-left: 80px;
`
export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 20px;

  @media (max-width: 1000px) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`
export const Link = styled.a`
  color: #ffff;
  margin-bottom: 10px;
  font-size: 0.9rem;
  text-decoration: none;
  cursor: pointer;

  &:hover{
    color: orange;
    transition: 200ms ease-in;
    cursor: pointer;
  }
`
export const Title = styled.p`
font-size: 1rem;
color: #ffff;
margin-bottom: 15px;
font-weight: bold;
`
export const Policy = styled.div`
font-size: 0.8rem;
text-align: center;
`