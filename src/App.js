import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { About } from './About';
import { Faq } from './Faq';
import { Login } from './Login';
import { NoMatch } from './NoMatch';
import { Layout } from './components/Layout';
import { NavigationBar } from './components/NavigationBar';
import { Footer } from './components/Footer';
import './App.css'
import { SignUp } from './SignUp';
import { Order } from './Order';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <NavigationBar />
          <Layout>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/about-us' component={About} />
              <Route path='/faqs' component={Faq} />
              <Route path='/login' component={Login} />
              <Route path='/signup' component={SignUp} />
              <Route path='/orders' component={Order} />
              <Route component={NoMatch} />
            </Switch>
          </Layout>
        </Router>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
