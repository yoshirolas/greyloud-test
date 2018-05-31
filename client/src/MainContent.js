import React, { Component } from 'react';
import styled from 'styled-components';

import HomeContent from './components/HomeContent';
import NewsContent from './components/NewsContent';
import AboutContent from './components/AboutContent';
import ContactsContent from './components/ContactsContent';
import ApplicationContent from './components/ApplicationContent';
import LoginContent from './components/LoginContent';
import ProfileContent from './components/ProfileContent';


const Main = styled.main`
  margin: 70px 20px 20px 20px;
  width: 100%;
  text-align: center;
`;

class MainContent extends Component {

  render() {
    return (
      <Main>
        {this.props.location.pathname === "/" ? <HomeContent /> : null}
        {this.props.location.pathname === "/news" ? <NewsContent /> : null}
        {this.props.location.pathname === "/about" ? <AboutContent /> : null}
        {this.props.location.pathname === "/contacts" ? <ContactsContent /> : null}
        {this.props.location.pathname === "/application" ? <ApplicationContent /> : null}
        {this.props.location.pathname === "/login" ? <LoginContent /> : null}
        {this.props.location.pathname === "/profile" ? <ProfileContent /> : null}
      </Main>
    );
  }
}


export default MainContent;