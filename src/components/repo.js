import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Star from './star';

const id = `?client_id=${process.env.REACT_APP_CLIENT_ID}`;
const secret = `&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`;

const repo = props => {
  const { name, stargazers_count, description, owner, languages_url, html_url } = props.repo;
  const [languages, setLanguages] = useState([])
  const [colors] = useState({
    'JavaScript': '#F0DB4F',
    'HTML': '#E23C2E',
    'CSS': '#24A5DB'
  })


  const getLanguages = async (url) => {
    (await fetch(url))
      .json()
      .then(results => {
        let temp = Object.keys(results)
        setLanguages(temp)  
      });
};

useEffect(() => {
  getLanguages(languages_url + id + secret);
}, []);

  return (
    <Container>
      <a href={html_url} target='blank'>
        <Sub primary bottom='.5vh'>
          <p>{name}</p>
          <Star star={stargazers_count} />
        </Sub>
      </a>
      <Sub secondary height='20vh'>
          <p>{description || `There is not yet a description for ${owner.login}'s repo!`}</p>
          <Wrapper>
            { languages.length ?
              languages.map((el, i) => {
              return <Box color={colors[el] || '#808080'} key={i}>
                {el}
              </Box>
            }) : <Box secondary>No languages found</Box>
            
            }
          </Wrapper>
      </Sub>
    </Container>
  );
};

export default repo;

const Container = styled.div`
  display: flex;
  flex-direction: column;

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const Sub = styled.div`
    display: inherit;
    flex-direction: ${props => props.secondary && 'column'};
    justify-content: ${props => props.secondary && 'space-between'};
    align-items: center;
    height: ${props => props.height};
    margin-bottom: ${props => props.bottom};
    background: #fff;
    padding: 1vh 1vw;
    justify-content: ${props => props.primary && 'space-around'};
    border-radius: ${props => props.primary ? '5px 5px 0 0 ' : '0 0 5px 5px'};
    cursor: ${props => props.primary && 'pointer'};
    transition: .5s;
    &:hover {
      transition: .5s;
      background: #f4f4f4;
      p {
        transition: .5s;
        color: #44A1A0;
      }
    }
    p {
      transition: .5s;
    }
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Box = styled.span`
    background: ${props => props.color || '#eee'};
    color: ${props => props.secondary ? '#000' : '#fff'};
    margin: 0 .25em;
    padding: .1em .2em;
`