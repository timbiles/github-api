import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const profile = (props) => {
    const {repo, user} = props
    const count = repo.filter(el => el.stargazers_count > 0).reduce((tot, el) => tot += el.stargazers_count, 0)
    return (
        <Container>
            <h1>{user.login}</h1>
            <Img src={user.avatar_url} alt=""/>
            <p>Number of repos: {repo.length}</p>
            <p>Number of stars: {count}</p>
             <a href={user.html_url} target='blank'>GitHub url</a>
            <StyledLink to='/search'>Back to Search</StyledLink>
        </Container>
    );
};

const mapStateToProps = (state) => state

export default connect(mapStateToProps)(profile);

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    a {
        color: #44A1A0;
    }
`
const Img = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 50%;
`

const StyledLink = styled(Link)`
    position: absolute;
    bottom: 3%;
    left: 3%;
`