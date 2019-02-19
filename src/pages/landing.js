import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

import { Button } from './search';

const landing = () => {
    return (
        <>
            <Container>
                <h1>GitHub Repo Search</h1>
                <h4>By Tim Biles</h4>
                <p>Click below to search a username!</p>
                <Link to='/search'><Button>Search!</Button></Link>
            </Container>
        </>
    );
};

export default landing;

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 90vh;
    background: #eee;
    h1 {
        animation: ${fadeIn} 3s;
        font-size: 3.5em;
        text-align: center;
        
        @media(max-width: 450px) {
            font-size: 2.5em;
        }
    }
    h4, p {
        animation: ${fadeIn} 5s;
    }
    button {
        animation: ${fadeIn} 5.25s;
        font-size: 1.5em;
        height: auto;
    }
    
`