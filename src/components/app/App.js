import React from 'react';
import { Router } from '@reach/router';

// Drag and Drop: Dnd api
import { DndProvider } from 'react-dnd';
import Backend from 'react-dnd-html5-backend';

// Component Styling
import './App.css';

// Internal components
import Header from '../header';
import Shop from '../shop';
import Footer from '../footer';

// Data

const NotFound = () => (
  <h1>This developer site does not support that url address.</h1>
);

/** App is the root, parent component that represents the starting point of the front-end application
 * @component
 */
const App = () => (
  // DndProvider: The Drag and Drop library provider that determines which api (touch or desktop) should be used.
  <DndProvider backend={Backend}>
    <div className="app">
      <Header />
      {/* TODO: Try adding back in the routing */}
      <Shop path="/" />
      <Footer />
    </div>
  </DndProvider>
);

export default App;
