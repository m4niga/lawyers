import React from 'react'
import gitImg from '../../images/github.png';
import * as s from './Footer.style'


export const Footer = () => {
    return (
        <s.FooterDiv>
            Developed By 
            <a href="https://github.com/m4niga" target='_blank' rel="noreferrer">
                <s.GitImg src={gitImg} alt='m4niga' />
            </a>
        </s.FooterDiv>
    )
}
