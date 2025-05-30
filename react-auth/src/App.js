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
import NewsContainer from './components/NewsContainer';
import ProductsProvider from './components/ProductsProvider';
import AccountComponent from './registerComponents/AccountComponent'


function App() {
  return (
    <>
      <MainMenuHover/>
      <Container>
          <Switch>

          </Switch>
          <SlideBanner/>
          <BrandsGrid/>

          <ProductsProvider/>

          <NewsContainer/>
      </Container>
    </>
  );
}

export default App;