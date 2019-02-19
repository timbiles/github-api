import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const nav = () => {
    return (
        <Container>
            <Link to='/'>GitHub SearchBar</Link>
        </Container>
    );
};

export default nav;

const Container = styled.div`
    display: flex;
    min-height: 10vh;
    background: #0F7173;
    padding-left: 5vw;

    a {
        color: #fff;
        text-decoration: none;
        font-size: 2em;
        margin: auto 0;
    }
`