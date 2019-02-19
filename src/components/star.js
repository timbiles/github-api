import React from 'react';
import styled from 'styled-components';

const star = props => {
  const { star } = props;

  return (
    <Container>
      {star}
      <img
        src={
          star > 0
            ? 'https://image.flaticon.com/icons/svg/148/148841.svg'
            : 'https://image.flaticon.com/icons/svg/149/149222.svg'
        }
        alt="Star"
      />
    </Container>
  );
};

export default star;

const Container = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 3vw;
    height: 3vh;
  }
`;
