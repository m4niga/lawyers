import React from 'react';
import styled, { css } from 'styled-components/macro';
import { Button } from '../Navbar/Button/Button';
import { IoMdArrowRoundForward } from 'react-icons/io';
import { IoArrowBack, IoArrowForward } from 'react-icons/io5';

const HeroSection = styled.section`
  height:100vh;
  max-height:1100px;
  position:relative;
  overflow:hidden;
`

const HeroWrapper = styled.div`
  width: 100%;
  height:100%;
  display:flex;
  justify-content: center;
  align-items:center;
  overflow: hidden;
  position:relative;
`

const HeroSlide = styled.div`
z-index:1;
width:100%;
height:100%;
`;
const HeroSlider = styled.div`
position:absolute;
top:0;
left:0;
width:100%;
height:100%;
display:flex;
justify-content: center;
align-items:center;

&::before{
  content:'';
  position:absolute;
  z-index: 2;
  width: 100%;
  height: 100%;
  bottom: 0vh;
  left: 0;
  overflow: hidden;
  opacity: 0.4;
  background: linear-gradient(
    0deg, 
    rgba(0,0,0,0.2) 0%, 
    rgba(0,0,0,0.2) 50%,
    rgba(0,0,0,0.6) 100%
  );


}
`;
const HeroImage = styled.img`
position:absolute;
top:0;
left:0;
width:100vw;
height:100vh;
object-fit: cover;
`;
const HeroContent = styled.div`
position:relative;
z-index:10;
display:flex;
flex-direction: column;
max-width: 1600px;
width: calc(100% - 100px);
color: #fff;

h1 {
  font-size: clamp(1rem, 8vw, 2rem);
  font-weight:400;
  text-transform:uppercase;
  text-shadow: 0px 0px 20px rgba(0,0,0,0.4);
  text-align:left;
  margin-bottom: 0.8rem;
}

p{
  text-shadow: 0px 0px 20px rgba(0,0,0,0.4);
  margin-bottom: 1.2rem;
}

`;
const Arrow = styled(IoMdArrowRoundForward)``;

const SliderButtons = styled.div`
  position:absolute;
  bottom:50px;
  right:50px;
  display:flex;
  z-index:10;
`;

const ArrowButtons = css`
width: 50px;
height: 50px;
color: #fff;
cursor: pointer;
background: #000d1a;
border-radius: 50px;
padding: 10px;
margin-right: 1rem;
user-select: none;
transition: 0.3s;

&:hover{
  backgroud: #cd853f;
  transform: scale(1.05);
}
`;

const PrevArrow = styled(IoArrowBack)`
${ArrowButtons}
`;

const NextArrow = styled(IoArrowForward)`
${ArrowButtons}
`;

const Hero = ({ slides }) => {
  return (
    <HeroSection>
      <HeroWrapper>
        {
          slides.map((slide, index) => {
            return (
              <HeroSlide key={index}>
                <HeroSlider>
                  <HeroImage 
                  src={slide.image}/>
                  <HeroContent>
                    <h1>{slide.title}</h1>
                    <p>{slide.subtitle}</p>
                    <Button 
                      to={slide.to} 
                      primary='true'
                      css={`max-width:160px`} 
                      >
                      {slide.label}
                      <Arrow />
                    </Button>
                  </HeroContent>
                </HeroSlider>
              </HeroSlide>
            )
          })
        }
        <SliderButtons>
          <PrevArrow/>
          <NextArrow />
        </SliderButtons>
      </HeroWrapper>

    </HeroSection>
  )
}

export default Hero