import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../containers/home.jsx'
import User from '../containers/user.jsx'
import Task from '../containers/task.jsx'
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/user' component={User}/>
      <Route path='/task' component={Task}/>
    </Switch>
  </main>
)

export default Main
