import styled from 'styled-components';
import { IoArrowBack} from 'react-icons/io5';



export const GoTop = styled.div`
z-index:1002;
position: fixed;
bottom: 5px;
right:14px;
width:30px;
height:30px;
border-radius:50%;
background-color: rgba(0,0,0,0.4);
opacity: ${({scrollY}) => !scrollY ? '0' : '1'};
display:flex;
align-items:center;
justify-content:center;
transition: .3s ease all;
&:hover{
    transform: translateY(-3px);
}
`;

export const IconTop = styled(IoArrowBack)`
color: #fff;
transform: rotate(90deg);
font-size:2rem;

`;