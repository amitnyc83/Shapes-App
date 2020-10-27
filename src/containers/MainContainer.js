import React from 'react';
import ShapeForm from '../components/ShapeForm' 
import styled from 'styled-components'


const Container = styled.div`
   display: flex;
   flex-direction: column;
   flex-wrap: nowrap;
   justify-content: space-around;
   align-items: center;
   margin: 20px;
   width: 50%;
   text-align: center;
   height: 50vh;
   border-style: solid;
`;

const MainContainer = () => {
    return(
        <Container>
            <ShapeForm />
        </Container>
      );
};
   
   
export default MainContainer;


