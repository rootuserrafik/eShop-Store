import React from 'react';
import './App.css';
import Header from './inc/Header'
import Home from './inc/Home'
import Spro from './inc/Collectibles/Spro'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Products from './inc/Collectibles/Products';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Switch>

        <Route path="/spro">
            <React.Fragment>
                <CssBaseline />
                <Container >
                  <Spro />
                </Container>
            </React.Fragment>
          </Route>

          <Route path="/product">
            <React.Fragment>
                <CssBaseline />
                <Container >
                  <Products />
                </Container>
            </React.Fragment>
          </Route>

          <Route path="/">
            <React.Fragment>
                <CssBaseline />
                <Container >
                    <Home />
                </Container>
            </React.Fragment>
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
