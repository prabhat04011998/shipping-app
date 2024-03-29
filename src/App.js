import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route, BrowserRouter, Redirect, Link, withRouter } from 'react-router-dom'

import GetLocation from './Components/Location'
import Result from './Components/Result'
import cropSelection from './Components/cropSelection';
import SelectCrop from './Components/Crop';
class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={SelectCrop} />
            <Route exact path="/result" component={Result} />
            <Route exact path="/locate" component={GetLocation} />
            <Route exact path="/cropSelection" component={cropSelection} />
            <Route render={() => (
              <header>
                <h1 data-text="404">404</h1>
              </header>
            )} />
          </Switch>
        </BrowserRouter>

      </div>
    );
  }
}

export default App;
