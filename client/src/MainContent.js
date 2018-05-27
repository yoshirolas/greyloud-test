import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import styled from 'styled-components';

import HomeContent from './components/HomeContent';
import NewsContent from './components/NewsContent';
import AboutContent from './components/AboutContent';
import ContactsContent from './components/ContactsContent';


const Main = styled.main`
  margin-top: 70px;
  width: 100%;
  height: 100vh;
  overflow: auto;
`;


class MainContent extends Component {

  state = {message: []}

  componentDidMount() {
    axios('/message')
      .then(message => this.setState({ message: message.data }));
  }

  render() {
    return (
      <Main>
        {this.props.location.pathname === "/" ? <HomeContent /> : null}
        {this.props.location.pathname === "/news" ? <NewsContent /> : null}
        {this.props.location.pathname === "/about" ? <AboutContent /> : null}
        {this.props.location.pathname === "/contacts" ? <ContactsContent /> : null}
        {this.state.message}
      </Main>
    );
  }
}


function mapStateToProps(state, ownProps) {
  return {
    state: state,
    ownProps: ownProps
  }
}

export default connect(mapStateToProps)(MainContent);