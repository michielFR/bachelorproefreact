import './App.css';
import React from 'react';
import Sort from './components/Sort';
import Nasa from './components/Nasa';
import Home from './components/Home';
import Chart from './components/PieChart';
import Interop from './components/Interop';
import Picofday from './components/Picofday';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/sort" component={Sort} />
          <Route path="/nasa" component={Nasa} />
          <Route path="/picofday" component={Picofday} />
          <Route path="/chart" component={Chart} />
          <Route path="/interop" component={Interop} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;