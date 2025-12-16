import React from 'react'
import { Routes, Route } from 'react-router-dom';
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
import Wishlist from './wishlistComponents/WishlistComponent';
import AuthComponent from './components/AuthComponent';
import ProtectedRoutes from './ProtectedRoutes'
import ItemsGridPage from './components/ItemsGridPage';

function App() {
  return (
    <>

      <MainMenuHover/>
      <Container>
          <Routes>
            <Route path="/" element={
              <>
                <SlideBanner/>
                <BrandsGrid/>
                <ProductsProvider category="homepage"/>
                <NewsContainer/>
              </>
            } />

            <Route path="/contul-meu" element={<AccountComponent />} />

            <Route path="/noutati" element={<ItemsGridPage category="noutati"/>} />

            <Route path="/sales" element={<ItemsGridPage category="sales"/>} />

            <Route path="/Auth" element={<AuthComponent/>} />
            
            <Route path="/Wishlist" element={
              <ProtectedRoutes>
                <Wishlist/>
              </ProtectedRoutes>
            } />
          </Routes>
      </Container>
    </>
  );
}

export default App;