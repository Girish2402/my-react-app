import React, { Component } from 'react';
import ManageToDo from '../ManageToDo';
import AddTodo from '../addTodo';

class Todo extends Component {
    state = {
        todoList: [
            { id: 100, content: "credit card payment" },
            { id: 111, content: "grossery" }
        ]
    }

    deleteTodo = (id) => {
        let todolist = this.state.todoList.filter(todo => {
            return todo.id !== id;
        })
        this.setState({
            todoList: todolist
        })
    }

    addTodo = (content) => {
        let id = Math.round(Math.random() * 1000);
        content.id = id;
        let todolist = [...this.state.todoList, content];
        this.setState({
            todoList: todolist
        })
    }

    render() {
        return (
            <div className="container">
                <div className="todo-list">
                    <h1>Todo's</h1>
                    <ul className="list-group">
                        <ManageToDo todoList={this.state.todoList} deleteTodo={this.deleteTodo} />
                        <AddTodo addTodo={this.addTodo} />
                    </ul>
                </div>
            </div>
        )
    }
}

export default Todo;