import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Drag and Drop: Dnd api
import { DndProvider } from 'react-dnd';
import Backend from 'react-dnd-html5-backend';

// Component Styling
import './App.css';

// Internal components
import Header from '../header';
import Shop from '../shop';
import Footer from '../footer';

/**
 * Not Found component: Fallback component when a route does not render.
 * @component
 */
const NotFound = () => (
  <h1 style={{ padding: '0 5rem', color: '#d33169' }}>
    This developer site does not support that url address.
  </h1>
);

/** App is the root, parent component that represents the starting point of the front-end application
 * @component
 */
const App = () => (
  // DEV: DndProvider: The Drag and Drop library provider that determines which api (touch or desktop) should be used.
  <DndProvider backend={Backend}>
    {/* DEV: The Router enables access to url matching and browser history info to do front-end navigation*/}
    <Router>
      <div className="app">
        <Header />
        <main>
          <Switch>
            <Route exact path="/">
              <Shop />
            </Route>
            {/* DEV: Fallback route */}
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  </DndProvider>
);

export default App;
