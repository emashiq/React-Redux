import React from 'react';
import {connect} from 'react-redux';
class Task extends React.Component {
    renderList() {
        return this.props.tasks.map((task) => {
            return (
                <li
                    key={task._id}> {task.name} 
                </li>
            );
        });
    }
    render() {
        
        return (
            <div>
               <ul>
                {this.renderList()}
               </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        tasks: state.tasks
    };
}

export default connect(mapStateToProps)(Task);