import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Navbar from './components/navbar'
import User from './components/users'
import Todo from './components/todo'
import About from './components/about'
import Home from './components/home'
import Post from './components/post'

class App extends Component{

  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/users" component={User}/>
            <Route path="/todo" component={Todo}/>
            <Route path="/about" component={About} />
            <Route path="/:post_id" component={Post}/>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
