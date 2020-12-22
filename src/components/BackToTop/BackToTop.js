import React from 'react';
import styled from 'styled-components';
import { IoArrowBack} from 'react-icons/io5';



const GoTop = styled.div`
z-index:1002;
position: fixed;
bottom: 5px;
right:14px;
width:30px;
height:30px;
border-radius:50%;
background-color: rgba(0,0,0,0.4);
opacity: ${({scrollY}) => !scrollY ? '0' : '1'};
display:flex;
align-items:center;
justify-content:center;

&:hover{
    transform: translateY(-3px);
}

transition: .3s ease all;

`;

const IconTop = styled(IoArrowBack)`
color: #fff;
transform: rotate(90deg);
font-size:2rem;

`;

const BackToTop = ({scrollY}) => {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <GoTop 
        onClick={scrollToTop}
        scrollY={scrollY}
        >
            <IconTop />
        </GoTop>
    )
}

export default BackToTop
