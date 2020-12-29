import React, {useEffect} from 'react'
import * as s from './Card.style'
import Aos from 'aos';
import 'aos/dist/aos.css'
import {Button} from '../Navbar/Button/Button'

const Card = ({image, title, text, dataAos}) => {
    useEffect(() => {
        Aos.init({duration: 1000})
      }, [])

    return (
        <s.ContainerCard data-aos={dataAos}>
            <s.ImageCard src={image} alt={title}/>

            <s.TitleCard>
                {title}
            </s.TitleCard>
            <s.Separator />

            <s.TextCard>
                {text}
            </s.TextCard>
                <Button primary='true'>
Ver Más
                </Button>
        </s.ContainerCard>
    )
}

export default Card
