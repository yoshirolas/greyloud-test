import React, { Component } from 'react';
import styled from 'styled-components';

import HomeContent from './HomeContent';
import NewsContent from './NewsContent';
import AboutContent from './AboutContent';
import ContactsContent from './ContactsContent';
import ApplicationContent from './ApplicationContent';
import LoginContent from '../containers/LoginContent';
import ProfileContent from './ProfileContent';


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