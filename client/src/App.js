import React from 'react';
import './App.css';
import {Container} from "semantic-ui-react"
import {Switch, Route} from "react-router-dom"
import Home from './components/Home'
import Departments from './components/Departments'
import NoMatch from './components/NoMatch'
// import NavBar from './components/NavBar'



function App() {
  return (
    <div>
      {/* <NavBar /> */}
      <Container>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path='/Deparments' component={Departments}/>
          <Route exact component={NoMatch}/>
        </Switch>
      </Container>
    </div>
  );
}

export default App;
