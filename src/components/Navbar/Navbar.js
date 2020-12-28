import React from 'react';
import { menuData } from '../../utils/data/MenuData';
import { Button } from './Button/Button';
import { Link as LinkScroll} from "react-scroll";
import logo from '../../images/logo-solo.png'
import * as s from './Navbar.style'


const Navbar = ({ toggle, scrollY }) => {

  return (
    <s.Nav scrollY={scrollY}>
      <s.LogoImg src={logo} to='/' />
      <s.MenuBars onClick={toggle} />
      <s.NavMenu>
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
              <s.NavMenuLinks scrollY={scrollY}>
                {item.title}
              </s.NavMenuLinks>
            </LinkScroll>

          ))
        }
      </s.NavMenu>
      <s.NavBtn>
        <Button to='/contact' primary='true'>
          Contacto
                </Button>
      </s.NavBtn>
    </s.Nav>
  )
}

export default Navbar
