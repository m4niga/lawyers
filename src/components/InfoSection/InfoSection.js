import React from 'react'
import { Button } from '../Navbar/Button/Button'
import * as s from './InfoSection.style'

const InfoSection = ({
    heading, 
    paragraphOne, 
    paragraphTwo, 
    buttonLabel, 
    image,
    reverse,
    id
}) => {
    return (
        <s.Section id={id}>
            <s.Container>
                <s.ColumnLeft>
                    <h1>{heading}</h1>
                    <p>{paragraphOne}</p>
                    <p>{paragraphTwo}</p>
                    <Button
                    to='/'
                    primary='true'>{buttonLabel}</Button>
                </s.ColumnLeft>
                <s.ColumnRight reverse={reverse}>
                    <img src={image} alt='home' />
                </s.ColumnRight>
            </s.Container>
        </s.Section>
    )
}

export default InfoSection
