import React from 'react';
import styled from 'styled-components';

const nav = () => {
    return (
        <Container>
            <h1>GitHub SearchBar</h1>
        </Container>
    );
};

export default nav;

const Container = styled.div`
    display: flex;
    width: 100vw;
    min-height: 10vh;
    background: #0F7173;
    color: #fff;
    padding-left: 5vw;
`