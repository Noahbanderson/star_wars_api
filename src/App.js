import React from 'react';
import Home from "./components/Home";
import { Container, } from "semantic-ui-react";
import { Switch, Route, } from "react-router-dom";
import Person from './components/Person'

const App = () => (
  <>
    <Container>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/person/:id" component={Person} />
      </Switch>
    </Container>
  </>
)

export default App;