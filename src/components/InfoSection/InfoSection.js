import React, {useEffect} from 'react'
import { Button } from '../Navbar/Button/Button'
import * as s from './InfoSection.style'
import Aos from 'aos';
import 'aos/dist/aos.css'

const InfoSection = ({
    heading, 
    paragraphOne, 
    paragraphTwo, 
    buttonLabel, 
    image,
    reverse,
    id
}) => {

  useEffect(() => {
    Aos.init({duration: 500})
  }, [])

    return (
        <s.Section id={id}>
            <s.Container>
                <s.ColumnLeft
                data-aos='fade-right'>
                    <h1>{heading}</h1>
                    <p>{paragraphOne}</p>
                    <p>{paragraphTwo}</p>
                    <Button
                    to='/'
                    primary='true'>{buttonLabel}</Button>
                </s.ColumnLeft>
                <s.ColumnRight data-aos='fade-left' reverse={reverse}>
                    <img src={image} alt='home' />
                </s.ColumnRight>
            </s.Container>
        </s.Section>
    )
}

export default InfoSection
