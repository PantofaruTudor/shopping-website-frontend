import React from 'react'
import { Switch, Route } from 'react-router-dom';
import { Container, Col, Row } from "react-bootstrap";
// import Account from './components/AccountComponent';
// import FreeComponent from './components/FreeComponent';
// import AuthComponent from './components/AuthComponent';
// import ProtectedRoutes from './ProtectedRoutes';
import SlideBanner from './components/SlideBanner'
import MainMenuHover from "./components/MainMenu";
import BrandsGrid from './components/BrandsGrid';
import UpcomingItems from './components/UpcomingGrid'
function App() {
  return (
    <>
      <MainMenuHover/>
      <Container>
        {/* <Row>
          <Col className="text-center">
            <h1>React Authentication Tutorial</h1>

            <section id="navigation">
              <a href="/">Home</a>
              <a href="/free">Free Component</a>
              <a href="/auth">Auth Component</a>
            </section>
          </Col>

        </Row>

        <Switch>
          <Route exact path="/" component={Account} />
          <Route exact path="/free" component={FreeComponent} />
          <ProtectedRoutes exact path="/auth" component={AuthComponent} />
        </Switch> */}

          <SlideBanner/>
          <BrandsGrid/>
          <UpcomingItems/>
      </Container>
    </>
  );
}

export default App;