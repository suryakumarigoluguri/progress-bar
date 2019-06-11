
//Reference link https://scotch.io/tutorials/creating-multistep-forms-with-react-and-semantic-ui

import React, { Component } from 'react';
import './App.css';
import MainForm from './components/mainform';
import { Container } from 'semantic-ui-react';


class App extends Component {

  render() {
    return(
      <Container textAlign='center'>
        <MainForm />
      </Container>     )
  }
}

export default App;