import React from 'react'
import * as s from './Socios.style'
import Card from '../Card/Card'
import {sociosData} from '../../utils/data/SociosData'


const Socios = () => {

  

    return (
        <s.Section id='socios'>
                <Card 
                    dataAos="zoom-in-right"
                    image={sociosData.adherentes.image}
                    title={sociosData.adherentes.title}
                    text={sociosData.adherentes.text} />
                
                <Card 
                    dataAos='flip-up'
                    image={sociosData.benefactores.image}
                    title={sociosData.benefactores.title}
                    text={sociosData.benefactores.text} />
                <Card 
                    dataAos='zoom-in-left'
                    image={sociosData.protectores.image}
                    title={sociosData.protectores.title}
                    text={sociosData.protectores.text} />

        </s.Section>
    )
}

export default Socios
