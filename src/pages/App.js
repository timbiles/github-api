import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Nav from '../components/nav';
import Repo from '../components/repo';
import Loading from '../components/loading';

const url = 'https://api.github.com/users/';
const otherUrl = '/repos?per_page=100';
const id = `&client_id=${process.env.REACT_APP_CLIENT_ID}`;
const secret = `&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`;

const App = () => {
  const [repo, setRepo] = useState([]);
  const [count, setCount] = useState(8);
  const [name, setName] = useState('biles-david');
  const [temporary, setTemp] = useState('')
  const [loading, setLoading] = useState(true);

  const fullUrl = `${url}${name}${otherUrl}${id}${secret}`
  console.log(fullUrl)

  const getEvents = async (url) => {
    (await fetch(url))
      .json()
      .then(results => {
        const result = results.filter(el => !el.fork);
        const sort = result.sort(
          (a, b) => b.stargazers_count - a.stargazers_count
        );
        setRepo(sort);
        setLoading(false);
        console.log(sort)
      });
  };
  useEffect(() => {
    console.log('hit')
    getEvents(fullUrl);
  }, [name]);

  const repoMap = repo.slice(count - 8, count).map(el => {
    return <Repo repo={el} key={el.id} />;
  });
  console.log(name)

  return (
    <>
      <Nav />
      {loading ? (
        <Loading />
      ) : (
        <Main>
          <Sub justify='center'>
          <Input placeholder='Search a name!' type="text" onChange={e => setTemp(e.target.value)} />
          <Button primary onClick={ () => setName(temporary)}>Search</Button>
          </Sub>
          <Container>{repoMap}</Container>
          <Sub justify='space-around'>
            <Button disabled={!(count > 8) && true} onClick={() => setCount(count - 8)}>
              Prev
            </Button>
            <Button disabled={count > repo.length && true} onClick={() => setCount(count + 8)} >
              Next
            </Button>
          </Sub>
        </Main>
      )}
    </>
  );
};

export default App;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #eee;
  min-height: 90vh;
`;
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 35px 5px;
  width: 95vw;
  margin: auto;
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
  margin: 4vh 0;
`
const Button =styled.button`
  height: 4vh;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  background: #44A1A0;
  border: 1px solid #44A1A0;
  padding: 0 1em;
`