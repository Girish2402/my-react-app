import React from 'react';

const ManageToDo = (props) => {
    let renderHtml;
    const { todoList, deleteTodo } = props;
    if (todoList.length > 0){
        renderHtml = todoList.map(todo => {
            return(
                <li key={todo.id} className="list-group-item" onClick={() => {deleteTodo(todo.id)}}>
                    {
                        todo.is_deleted ? (
                            <del>{todo.content}</del>
                        ) : (
                                <a>{ todo.content }</a>
                        )
                    }
                </li>
            )
        });
    }else{
        return(
            <li className="list-group-item">No Todo's left</li>
        )
    }
    return(renderHtml)
}

export default ManageToDo;