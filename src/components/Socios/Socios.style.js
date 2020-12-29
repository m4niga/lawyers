import styled from 'styled-components'

export const Section = styled.div`
width: 100%;
min-height: 100vh;
padding: 4rem 3rem;
display:flex;
justify-content:center;
align-items:center;

@media screen and (max-width: 768px){
    flex-direction:column;
}
`