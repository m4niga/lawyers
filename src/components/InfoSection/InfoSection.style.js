import styled from 'styled-components'

export const Section = styled.section`
width: 100%;
height: 100%;
padding: 4rem 0rem;
`;

export const Container = styled.div`
padding: 0rem calc((100vw - 1300px) / 2);
display: grid;
grid-template-columns: 1fr 1fr;
grid-template-rows: 88vh;
margin: 0rem 1rem;


@media screen and (max-width: 768px){
grid-template-columns: 1fr;
padding: 0rem;
}
`;

export const ColumnLeft = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items: flex-start;
line-height:1.4;
padding: 1rem 2rem;
order: ${({reverse}) => (reverse ? '2' : '1')};

}
h1{
margin-bottom:1rem;
font-size: clamp(1.5rem, 6vw, 2rem);

@media screen and (max-width: 768px){
    margin: 1rem auto;
}

text-shadow: 0px 0px 10px rgba(0,0,0,0.3);
}
p{
margin-bottom:2rem;
}
`;

export const ColumnRight = styled.div`
padding: 1rem 2rem;
order: ${({ reverse }) => (reverse ? '1' : '2')};
display:flex;
align-items: center;
justify-content:center;
@media screen and (max-width: 768px){ 
order: ${({ reverse }) => (reverse ? '2' : '1')};
}

img{
width: 100%;
height: 100%;
object-fit: cover;
box-shadow: 0px 0px 10px rgba(0,0,0,0.5);

@media screen and (max-width: 768px){ 
    width: 100%;
    height: 100%;
    margin-top:3rem;
}
}
`;