import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Sobre from './Components/Sobre';
import Contato from './Components/Contato';
import Campanhas from './Components/Campanhas';
import Admin from './Components/Admin';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path="/" component={Home}/>
          <Route path="/sobre" component={Sobre}/>
          <Route path="/contato" component={Contato}/>
          <Route path="/campanhas" component={Campanhas}/>
          <Route path="/admin" component={Admin}/>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;

