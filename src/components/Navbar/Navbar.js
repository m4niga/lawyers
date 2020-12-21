import React from 'react';
import styled, { css } from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { menuData } from '../../utils/data/MenuData';
import { Button } from './Button/Button';
import { FaBars } from 'react-icons/fa';
import { Link as LinkScroll} from "react-scroll";


const Nav = styled.nav`
  height: 60px;
  display:flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  z-index:1000;
  position: fixed;
  width:100%;
  background-color: ${({ scrollY }) => !!scrollY  && 'black'};
  transition: .3s background-color;
`


const NavLink = css`
  color: #fff;
  display:flex;
  align-items:center;
  padding: 0 1rem;
  height: 100%;
  cursor:pointer;
  text-decoration:none;
`

const Logo = styled(Link)`
  ${NavLink}
  font-style: italic;
`
const MenuBars = styled(FaBars)`
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

const NavMenu = styled.div`  
  display:flex;
  align-items:center;  
  margin-right: -48px;

  @media screen and (max-width: 768px){
    display:none;
  }
`

const NavMenuLinks = styled.div`
  ${NavLink}
`

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px){
    display:none;
  }
`

const Navbar = ({ toggle, scrollY }) => {

  return (
    <Nav scrollY={scrollY}>
      <Logo to='/'>
        ATS
            </Logo>

      <MenuBars onClick={toggle} />

      <NavMenu>
        {
          menuData.map((item, index) => (
            <LinkScroll
              activeClass="active"
              to={item.id}
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              key={index}>
              <NavMenuLinks>
                {item.title}
              </NavMenuLinks>
            </LinkScroll>

          ))
        }
      </NavMenu>
      <NavBtn>
        <Button to='/contact' primary='true'>
          Contacto
                </Button>
      </NavBtn>
    </Nav>
  )
}

export default Navbar
