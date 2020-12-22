import React from 'react'
import styled from 'styled-components'
import gitImg from '../../images/github.png';

const FooterDiv = styled.div`
display:flex;
justify-content:center;
align-items:center;
    width:100%;
    height:8vh;
    bottom:0;
    background-color:black;
    color: #fff;
    text-align:center;
`


const GitImg = styled.img`
max-width:40px;
position:flex;
justify-content:center;
align-items: center;
margin-left:.1rem;
transform: translateY(0px)
`;

export const Footer = () => {
    return (
        <FooterDiv>
            Developed By 
            <a href="https://github.com/m4niga" target='_blank' rel="noreferrer">
                <GitImg src={gitImg} alt='m4niga' />
            </a>
        </FooterDiv>
    )
}
