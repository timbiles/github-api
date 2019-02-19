import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

import { updateRepo, updateName } from '../ducks/reducer';


import Loading from '../components/loading';
import Repo from '../components/repo';

const url = 'https://api.github.com/users/';
const otherUrl = '/repos?per_page=100';
const id = `&client_id=${process.env.REACT_APP_CLIENT_ID}`;
const secret = `&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`;

const Search = (props) => {
  const [count, setCount] = useState(8);
  // const [name, setName] = useState('timbiles');
  const [temporary, setTemp] = useState('')
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false)

  const fullUrl = `${url}${props.name}${otherUrl}${id}${secret}`

  const getEvents = async (url) => {
      (await fetch(url))
        .json()
        .then(results => {
          if(!results.length) {
            setError(true)
            setLoading(false)
          } else {
            const result = results.filter(el => !el.fork);
            const sort = result.sort(
              (a, b) => b.stargazers_count - a.stargazers_count
            );
            props.updateRepo(sort)
            setLoading(false);
            setError(false)
          }
        });
  };
  console.log(props.name)
  
  useEffect(() => {
    getEvents(fullUrl);
  }, [props.name]);

  const keyDown = (e) => e.key === 'Enter' && searchBar()

  const searchBar = () => {
    setLoading(true)
    props.updateName(temporary.replace(' ', ''))
  }

  const repoMap = props.repo.slice(count - 8, count).map(el => {
    return <Repo repo={el} key={el.id} />;
  });


  return (
    <Main>
      <>
      <Sub justify='center'>
          <Input placeholder={props.name} type="text" onChange={e => setTemp(e.target.value)} onKeyDown={keyDown}/>
          <Button primary onClick={searchBar}>Search</Button>
      </Sub>
      <Text>Check out the user's profile <StyledLink to='/profile'>here!</StyledLink></Text>
      </>
      {loading ? (
        <Loading />
      ) : error ?
      <Container primary>
          <h2>Ooops, no user found. Please try another name!</h2>
      </Container>
      : (
        <>
          <Container>{repoMap}</Container>
          <Sub justify='space-around'>
            <Button disabled={!(count > 8) && true} onClick={() => setCount(count - 8)}>
              Prev
            </Button>
            <Button disabled={count > props.repo.length && true} onClick={() => setCount(count + 8)} >
              Next
            </Button>
          </Sub>
        </>
      )}
    </Main>
  );
};

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  { updateRepo, updateName }
)(Search);

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #eee;
  min-height: 90vh;
  padding-bottom: 4vh;
`;
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 35px 5px;
  width: 95vw;
  margin: auto;
  min-height: ${props => props.primary && '80vh'};

  ${props => props.primary && css`
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`;

const Input = styled.input`
  width: 60vw;
  height: 4vh;
  padding: 0;
  border: 0;
  font-size: 1.3em;
`;

const Sub = styled.div`
  display: flex;
  justify-content: ${props => props.justify};
  align-items: center;
  margin-top: 4vh;
`

const Text = styled.p`
  text-align: center;
  letter-spacing: 2px;
`

const StyledLink = styled(Link)`
  color: #44A1A0;
`
export const Button =styled.button`
  height: 4vh;
  border-radius: ${props => props.primary ? '0 5px 5px 0' : '5px'};
  cursor: pointer;
  background: #44A1A0;
  border: 1px solid #44A1A0;
  padding: 0 1em;
  transition: .5s;

  &:hover {
    color: #eee;
    transition: .5s;
  }
`