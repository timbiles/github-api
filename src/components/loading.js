import React from 'react';
import styled, { keyframes } from 'styled-components';

const loading = () => {
    return (
        <Container>
            <Bar />
            <Bar delay='.1s'/>
            <Bar delay='.2s'/>
            <Bar delay='.3s'/>
            <Bar delay='.4s'/>
          </Container>
    );
};

export default loading;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 300px;
  min-height: 80vh;
  margin: auto;
`

const extend = keyframes`
  0% {
    transform: scale(1);
  }
  20% {
    transform: scale(1, 2.2);
    background-color: #44A1A0;
  }
  40% {
    transform: scale(1);
  }
`

const Bar = styled.div`
  height: 20px;
  width: 4px;
  margin-right: 4px;
  border-radius: 4px;
  background-color: snow;
  animation: ${extend} 1s ease-in-out infinite;
  animation-delay: ${props => props.delay};
`

