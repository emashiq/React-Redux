import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPosts, fetchPostsSuccess } from '../actions/tasks.jsx'
import { Link } from 'react-router-dom'
import {fetchBooks} from '../actions/tasks.jsx';
class Task extends React.Component {
    componentDidMount() {
        this.props.fetchPosts();
    }
    renderList() {
        if (this.props.tasks===null)
            return;
        
        return this.props.tasks.map((task) => {
            return (
                <li
                    key={task._id}> {task.name} <span className="btn btn-info">{task.status[0]}</span>
                </li>
            );
        });
    }
    render() {
        return (
            <div>
                <Link to="/task-create">Create New Task</Link>
               <ul>
                    {this.renderList()}
               </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchPosts: () => {
            dispatch(fetchPosts()).then((response) => { dispatch(fetchPostsSuccess(response.payload.data));
            });
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Task);