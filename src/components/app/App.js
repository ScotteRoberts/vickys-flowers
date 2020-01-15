import React from 'react';
import { Router } from '@reach/router';
import Header from '../header';
import Shop from '../shop';
import Footer from '../footer';
import './App.css';

const NotFound = () => (
  <h1>This developer site does not support that url address.</h1>
);

/** App is the root, parent component that represents the starting point of the front-end application
 * @component
 */
const App = () => (
  <div className="app">
    <Header />
    <Shop path="/" />
    <Footer />
  </div>
);

export default App;
