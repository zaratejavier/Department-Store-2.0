import React from 'react';
import './App.css';
import {Container} from "semantic-ui-react"
import {Switch, Route} from "react-router-dom"
import Home from './components/Home'
import Departments from './components/Departments'
import Department from './components/Department'
import NoMatch from './components/NoMatch'
import NavBar from './components/NavBar'
import Items  from './components/Items'



function App() {
  return (
    <div>
      <NavBar />
      <Container>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path='/Departments' component={Departments}/>
          <Route exact path="/departments/:id" component={Department} />
          <Route exact path = '/Items' component={Items}/>
          <Route exact component={NoMatch}/>
        </Switch>
      </Container>
    </div>
  );
}

export default App;
