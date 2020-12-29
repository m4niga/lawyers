import React from 'react'
import * as s from './Plan.style'
import Card from '../Card/Card'
import {planData} from '../../utils/data/PlanData'


const Socios = () => {

  

    return (
        <s.Section id='plan'>
                <Card 
                    dataAos="zoom-in-right"
                    image={planData.primero.image}
                    title={planData.primero.title}
                    text={planData.primero.text} />
                
                <Card 
                    dataAos='flip-up'
                    image={planData.segundo.image}
                    title={planData.segundo.title}
                    text={planData.segundo.text} />
                <Card 
                    dataAos='zoom-in-left'
                    image={planData.tercero.image}
                    title={planData.tercero.title}
                    text={planData.tercero.text} />

        </s.Section>
    )
}

export default Socios
