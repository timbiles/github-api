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
  const [count, setCount] = useState(10);
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(true);

  const getEvents = async url => {
    (await fetch(url + (name || 'timbiles') + otherUrl + id + secret))
      .json()
      .then(results => {
        const result = results.filter(el => !el.fork);
        const sort = result.sort(
          (a, b) => b.stargazers_count - a.stargazers_count
        );
        setRepo(sort);
        setLoading(false);
      });
  };
  useEffect(() => {
    getEvents(url);
  }, []);

  const repoMap = repo.slice(count - 10, count).map(el => {
    return <Repo repo={el} key={el.id} />;
  });

  console.log(repo);

  return (
    <>
      <Nav />
      {loading ? (
        <Loading />
      ) : (
        <Main>
          <Input type="text" onChange={e => setName(e.target.value)} />
          <Container>{repoMap}</Container>
          <Sub>
            <button disabled={!(count > 10) && true} onClick={() => setCount(count - 10)}>
              prev
            </button>
            <button disabled={count > repo.length && true} onClick={() => setCount(count + 10)} >
              next
            </button>
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
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 35px 5px;
  width: 95vw;
  margin: auto;
`;

const Input = styled.input`
  width: 50vw;
  height: 4vh;
  margin: 4vh auto;
`;

const Sub = styled.div`
  display: flex;
  width: 95vw;
  justify-content: space-around;
  margin: 4vh 0;
`
