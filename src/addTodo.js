import React, { Component} from 'react';

class AddTodo extends Component{
    state = {
        content: ""
    }

    handleChange = (e) =>{
        debugger;
        this.setState({
            content: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
            content: ""
        })

    }


    render(){
        return(
            <form className="form-inline" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label for="addtodo">Add ToDo</label>
                    <input name="todo" type="text" id="addtodo" onChange={this.handleChange} value={this.state.content}/>
                </div>
            </form>
        )
    }
}

export default AddTodo;