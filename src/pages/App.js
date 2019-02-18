import React, { useEffect, useState } from 'react';
import Nav from '../components/nav';
import Repo from '../components/repo';

import '../App.css';

const url = 'https://api.github.com/users/timbiles/repos?per_page=100'
const id = `&client_id=${process.env.REACT_APP_CLIENT_ID}`
const secret = `&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`

const App = () => {
  const [repo, setRepo] = useState([])

  useEffect(() => {
    getEvents(url)
  })
  
  const getEvents = async (url) => {
    (await fetch(url + id + secret)).json().then(results => {
      const result = results.filter(el => !el.fork)
      const sort = result.sort((a,b) => b.stargazers_count - a.stargazers_count)
      console.log(sort)
      
    });
  };

  // const repoMap = 


    return (
      <div className="App">
      <Nav />
        <button onClick={() => this.setState({page: this.state.page +1})}>Click</button>
      </div>
    );

}

export default App;
