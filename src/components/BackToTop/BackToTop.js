import React from 'react'
import styled from 'styled-components'



const GoTop = styled.div`
z-index:1002;
position: fixed;
bottom: 20px;
right:20px;
width:30px;
height:30px;
border-radius:50%;
background-color: black;
display: ${({scrollY}) => !scrollY && 'none'};

transition: 3s display;
`

const BackToTop = ({scrollY}) => {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <GoTop 
        onClick={scrollToTop}
        scrollY={scrollY}
        />
    )
}

export default BackToTop
