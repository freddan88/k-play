import React from 'react';
import StartTest from './PagesTest/StartTest';
import PlayerTest from './PagesTest/PlayerTest';
import SearchPage from './components/SearchPage/SearchPage'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={StartTest}/>
          <Route path="/player" exact component={PlayerTest}/>
          <Route path="/search" exact component={SearchPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
