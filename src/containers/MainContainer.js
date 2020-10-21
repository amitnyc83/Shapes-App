import React from 'react'
import ShapeForm from '../components/ShapeForm' 
import styled from 'styled-components'


const Container = styled.div`
   display: flex;
   flex-direction: column;
   margin:0px auto;
   width: 50%;
   align-items: center;
   text-align: center;
   border: 20px;
   heigth: auto;
   background-color: bisque;
   `;

const MainContainer = () => {

 return(
     <Container>
         <ShapeForm />
     </Container>
   );
};


export default MainContainer;