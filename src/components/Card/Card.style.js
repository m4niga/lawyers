import styled from 'styled-components'

export const ContainerCard = styled.div`
border: 1px solid #000d1a;
border-radius:5%;
box-shadow: 5px 5px 10px rgba(0,0,0,0.5);
background: #fafafa;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
width:30%;
padding:1rem;
margin:.5rem;
min-height:50vh;
&:hover{
    background: #ffffff;
    box-shadow: 2px 2px 6px rgba(0,0,0,0.5);
    transition: .3s ease all;
}

@media screen and (max-width: 768px){
    width:100%;
}
`

export const ImageCard = styled.img`
width:8rem;
margin-bottom:1rem;
`
export const TitleCard = styled.h1`
text-align:center;
font-size: 1.5rem;
font-weight:500;

`

export const Separator = styled.div`
color:black;
width: 40%;
margin-top:1rem;
margin-bottom: 1rem;
height:3px;
background:#31b164;
&:hover{
    width:50%;
}
transition: .3s ease all;
`

export const TextCard = styled.p`
font-size:1.1rem;
text-align:center;
margin-bottom:1em;
`

export const ButtonCard = styled.button`
margin:2rem;
height:3rem;
width:50%;
background: #dc3545;
color:#ffffff;
text-transform:uppercase;
border:0px;
outline:none;
border-radius:5px;
box-shadow: 2px 2px 5px rgba(0,0,0,0.4);
transition: .3s ease all;
&:hover{
    box-shadow: 1px 1px 3px rgba(0,0,0,0.4);
    transition: .3s ease all;
}
`