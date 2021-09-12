import React from 'react';
import Header from './Components/Header/index'
import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from './Components/HomePage/index'
import Footer from './Components/Footer/index'

const App = () => {
  return (
    <>
      <BrowserRouter>

        <Header />

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
            <HomePage />
          )
        } />
        <Route path="/policy" exact strict render={
          () => (
            <HomePage />
          )
        } />
        <Footer />

      </BrowserRouter>
    </>
  );
};

export default App;