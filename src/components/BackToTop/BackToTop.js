import React from 'react';
import * as s from './BackToTop.style'
const BackToTop = ({scrollY}) => {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <s.GoTop 
        onClick={scrollToTop}
        scrollY={scrollY}
        >
            <s.IconTop />
        </s.GoTop>
    )
}

export default BackToTop
