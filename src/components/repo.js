import React from 'react';
import styled from 'styled-components';

import Star from './star';

const repo = props => {
  const { name, stargazers_count, description } = props.repo;
  return (
    <Container>
      <Sub primary bottom='1vh'>
        <p>{name}</p>
        <Star star={stargazers_count} />
      </Sub>
      <Sub height='20vh'>
          <p>{description}</p>
      </Sub>
    </Container>
  );
};

export default repo;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Sub = styled.div`
    display: inherit;
    align-items: center;
    height: ${props => props.height};
    margin-bottom: ${props => props.bottom};
    background: #fff;
    padding: 1vh 1vw;
    justify-content: ${props => props.primary && 'space-around'}
`;
