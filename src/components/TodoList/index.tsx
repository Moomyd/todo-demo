import React from 'react'
import TodoListItem from '../TodoListItem'
import { Todo, CompleteTodo, DeleteTodo, CompleteAll } from '../types'
import './index.css'

interface Props {
    todos: Todo[]
    choose: number
    completeTodo: CompleteTodo
    deleteTodo: DeleteTodo
    completeAll: CompleteAll
}

const TodoList: React.FC<Props> = ({ todos, completeTodo, deleteTodo, completeAll, choose }) => {
    const newTodos = todos.filter((todo) => {
        if (choose === 1) {
            return todo
        }
        if (choose === 2) {
            return todo.complete === false
        }
        if (choose === 3) {
            return todo.complete === true
        }
        return todo
    })
    return (
        <div>
            <input className="toggle-all" type="checkbox" />
            <label htmlFor="toggle-all" onClick={completeAll} />
            <ul className="todo-list">
                {newTodos.map((todo) => {
                    return (
                        <TodoListItem
                            todo={todo}
                            completeTodo={completeTodo}
                            deleteTodo={deleteTodo}
                        />
                    )
                })}
            </ul>
        </div>
    )
}
export default TodoList
