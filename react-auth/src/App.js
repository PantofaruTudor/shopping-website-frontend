import React from 'react'
import { Switch, Route } from 'react-router-dom';
import { Container} from "react-bootstrap";
// import Account from './components/AccountComponent';
// import FreeComponent from './components/FreeComponent';
// import AuthComponent from './components/AuthComponent';
// import ProtectedRoutes from './ProtectedRoutes';
import SlideBanner from './components/SlideBanner'
import MainMenuHover from "./components/MainMenu";
import BrandsGrid from './components/BrandsGrid';
import NewsContainer from './components/NewsContainer';
import ProductsProvider from './components/ProductsProvider';
import AccountComponent from './registerComponents/AccountComponent'
import Wishlist from './wishlistComponents/WishlistComponent';
import AuthComponent from './components/AuthComponent';
import ProtectedRoutes from './ProtectedRoutes'

function App() {
  return (
    <>

      <MainMenuHover/>
      <Container>
          <Switch>
            <Route exact path="/">
              <SlideBanner/>
              <BrandsGrid/>
              <ProductsProvider/>
              <NewsContainer/>
            </Route>
            <Route path="/contul-meu">
              <AccountComponent />
            </Route>
            <ProtectedRoutes path="/Auth" component={AuthComponent}/>
            <ProtectedRoutes path="/Wishlist" component={Wishlist}/>
          </Switch>
      </Container>
    </>
  );
}

export default App;