import React from 'react';
import { connect } from 'react-redux';

class TaskCreate extends React.Component{
   
    submitBook(input) {
        console.log(input);
        this.props.createBook(input);
        return false;
    }
    render(){
        const { onSubmit } = this.props //pass onSubmit from 
        return(
            <div>
                <form onSubmit={(e) => { onSubmit }  }>
                    <div className="col-md-4">
                        <label className="">Name</label>
                        <input type="text" name="name" placeholder="Enter Task Name" className="form-control" />
                        <label>Status</label>   
                        <select name="status" className="form-control">
                            <option value="pending">Pending</option>
                            <option value="completed">Completed</option>
                            <option value="ongoing">On Going</option>
                        </select>  
                        <br/> 
                        <input type="submit" value="Save" className="btn btn-primary"/>              
                    </div>
                </form>
            </div>
        )
    }
    
}
const mapStateToProps = (state, ownProps) => {
    return {
        // You can now say this.props.books
        task: state.tasks
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        // You can now say this.props.createBook
        createBook: task => dispatch(console.log(task))
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(TaskCreate);