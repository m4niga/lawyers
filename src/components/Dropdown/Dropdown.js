import React from 'react'
import { menuData } from '../../utils/data/MenuData'
import { Button } from '../Navbar/Button/Button'
import * as s from './Dropdown.style'
import { Link as LinkScroll } from "react-scroll";


const Dropdown = ({ isOpen, toggle }) => {
    return (
        <s.DropdownContainer isOpen={isOpen} onClick={toggle}>
            <s.Icon onClick={toggle}>
                <s.CloseIcon />
            </s.Icon>
            <s.DropdownWrapper>
                <s.DropdownMenu>
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
                                <s.DropdownLink
                                    onClick={toggle}
                                    to={item.to}
                                    key={index}
                                >
                                    {item.title}
                                </s.DropdownLink>
                            </LinkScroll>
                        ))
                    }
                </s.DropdownMenu>
                <s.BtnWrap>
                    <Button primary='true'
                        round='true'
                        big='true'
                        to='/contact'
                    >
                        Contacto
                    </Button>
                </s.BtnWrap>
            </s.DropdownWrapper>
        </s.DropdownContainer>
    )
}

export default Dropdown
