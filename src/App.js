import React, { Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import Navbar from './components/navbar'
import User from './components/users'
import Todo from './components/todo'

class App extends Component{

  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Route exact path="/" component={User} />
          <Route path="/todo" component={Todo}/>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
