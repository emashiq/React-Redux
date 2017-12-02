import React,{Component} from 'react'
import Navbar from './containers/nav.jsx'
import UserList from './containers/userlist.jsx'
import UserDetails from './containers/user-details.jsx'
import Main from './router/route.jsx'
export default class App extends React.Component{
    render(){
        
        return (
            <div>
                <Navbar />
                <div className='container'>
                <Main />                
                </div>
            </div>
         
    );
    }
}