import React from 'react'
import TodoListItem from '../TodoListItem'
import { Todo, CompleteTodo, DeleteTodo } from '../types'
import './index.css'

interface Props {
    todos: Todo[]
    completeTodo: CompleteTodo
    deleteTodo: DeleteTodo
    choose: number
}

const TodoList: React.FC<Props> = ({ todos, completeTodo, deleteTodo, choose }) => {
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
