import React,{Component} from 'react'
import Navbar from './containers/nav.jsx'
import UserList from './containers/userlist.jsx'
import UserDetails from './containers/user-details.jsx'
export default class App extends React.Component{
    render(){
        
        return (
            <div>
                <Navbar />
                <div className="container">
                <div className="col-md-8 col-offset-md-4"></div>
                <h2>User List</h2>
                <UserList />
                    <h2>User Details</h2>
                <UserDetails />
                </div>
               
            </div>
         
    );
    }
}