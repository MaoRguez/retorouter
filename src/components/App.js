import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Layout from './Layout';
import Home from '../pages/Home';
import About from '../pages/About';
import Services from '../pages/Services';
import Projects from '../pages/Projects';
import Contacts from '../pages/Contacts';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/Contacts" component={Contacts} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
