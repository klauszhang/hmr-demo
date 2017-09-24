import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { withStyles } from 'material-ui/styles';
import classnames from 'classnames';

const styles = {
  main: {
    backgroundColor: 'red'
  }
};

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className={classnames('App-intro', classes.main)}>
          To get started, edit <code>src/App.js</code> and save to
          reload.
        </p>
      </div>
    );
  }
}

export default withStyles(styles)(App);
