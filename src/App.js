import React from 'react';
import Header from './Components/Header/index'
import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from './Components/HomePage/index'
import Footer from './Components/Footer/index'
import Contact from './Components/Contact/index'
import WhatsappIcon from './Components/WhatsAppIcon/index'
import OrderPolicy from './Components/Policy/index'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <WhatsappIcon />
        <Route path="/" exact strict render={
          () => (
            <HomePage />
          )
        } />

        <Route path="/recommends" exact strict render={
          () => (
            <HomePage />
          )
        } />
        <Route path="/q-and-a" exact strict render={
          () => (
            <HomePage />
          )
        } />
        <Route path="/contact" exact strict render={
          () => (
            <Contact />
          )
        } />
        <Route path="/policy" exact strict render={
          () => (
            <OrderPolicy />
          )
        } />
        <Footer />

      </BrowserRouter>
    </>
  );
};

export default App;