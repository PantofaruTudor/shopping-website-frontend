import React from 'react'
import { Switch, Route } from 'react-router-dom';
import { Container, Col, Row } from "react-bootstrap";
import Account from './AccountComponent';
import MainMenuHover from "./MainMenu";
import FreeComponent from './FreeComponent';
import AuthComponent from './AuthComponent';
import ProtectedRoutes from './ProtectedRoutes';


function App() {
  return (
    <>
      <MainMenuHover/>
      <Container>
        <Row>
          <Col className="text-center">
            <h1>React Authentication Tutorial</h1>

            <section id="navigation">
              <a href="/log-in/">Home</a>
              <a href="/log-in/free">Free Component</a>
              <a href="/log-in/auth">Auth Component</a>
            </section>
          </Col>

        </Row>

        {/*create routes here*/}
        <Switch>
          <Route exact path="/log-in" component={Account} />
          <Route exact path="/log-in/free" component={FreeComponent} />
          <ProtectedRoutes exact path="/log-in/auth" component={AuthComponent} />
        </Switch>

      </Container>
    </>
  );
}

export default App;