import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Settings from './pages/Settings';
import NotFound from './pages/NotFound';
import Layout from './components/Layout';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route path="/settings" component={ Settings } />
            <Route component={ NotFound } />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
