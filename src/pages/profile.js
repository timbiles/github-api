import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

const profile = (props) => {
    const {repo, user} = props
    console.log(repo)
    return (
        <div>
            <h1>{user.login}</h1>
            <Img src={user.avatar_url} alt=""/>
            <p>Number of repos: {repo.length}</p>
        </div>
    );
};

const mapStateToProps = (state) => state

export default connect(mapStateToProps)(profile);

const Img = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 50%;
`