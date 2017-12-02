import React from 'react';
import { Link } from 'react-router-dom'
export default class Navbar extends React.Component{
    render(){
        return (
            <nav className="navbar navbar-inverse">
            <div className="container-fluid">
              <div className="navbar-header">
                <a className="navbar-brand" href="#">WebSiteName</a>
              </div>
              <ul className="nav navbar-nav">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/user">User</Link></li>
                <li><Link to="/task">Task</Link></li>
                <li><a href="#">Page 3</a></li>
              </ul>
            </div>
          </nav>
        );
    }
}