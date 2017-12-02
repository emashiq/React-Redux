import React from 'react'
import UserList from './userlist.jsx';
import UserDetails from './user-details.jsx';
export default class User extends React.Component{
render(){
    return (
        <div>
        <h2>User List</h2>
        <UserList />
            <h2>User Details</h2>
        <UserDetails />
        </div>
        );
    }
}