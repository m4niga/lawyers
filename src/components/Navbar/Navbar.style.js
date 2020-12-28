import styled, { css } from 'styled-components/macro';
import { FaBars } from 'react-icons/fa';

export const Nav = styled.nav`
height: 60px;
display:flex;
justify-content: space-between;
padding: 1rem 2rem;
z-index:1000;
position: fixed;
width:100%;
background-color: ${({ scrollY }) => !!scrollY  && 'white'};
transition: .3s background-color;
`

export const NavLink = css`
display:flex;
align-items:center;
padding: 0 1rem;
height: 100%;
cursor:pointer;
text-decoration:none;
`

export const LogoImg = styled.img`
width:40px;
height:45px;
transform: translateY(-10px);
&:hover{
  width:42px;
  height:47px;
}
transition: .3s ease all;
`

export const MenuBars = styled(FaBars)`
display:none;

@media screen and (max-width: 768px){
  display:block;
  height:25px;
  width:25px;
  color:white;
  cursor:pointer;
  position:absolute;
  top:0;
  right:0;
  transform: translate(-100% , 65%);
}
`

export const NavMenu = styled.div`  
display:flex;
align-items:center;  
margin-right: -48px;

@media screen and (max-width: 768px){
  display:none;
}
`

export const NavMenuLinks = styled.div`
${NavLink};
color: ${({ scrollY }) => !scrollY  ? 'white' : 'black'};
text-shadow: 0 4px 10px rgba(0,0,0,0.5);
text-transform:uppercase;
font-weight:300;
&:hover{

  font-weight:400;
  letter-spacing: .1em;
}
transition: .3s ease all;
`

export const NavBtn = styled.div`
display: flex;
align-items: center;
margin-right: 24px;

@media screen and (max-width: 768px){
  display:none;
}
`