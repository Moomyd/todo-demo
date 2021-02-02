/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import { CloseCircleOutlined } from '@ant-design/icons'
import { Todo, CompleteTodo, DeleteTodo } from '../types'
import './index.css'

interface Props {
    todo: Todo
    completeTodo: CompleteTodo
    deleteTodo: DeleteTodo
}
const TodoListItem: React.FC<Props> = ({ todo, completeTodo, deleteTodo }) => (
    <li className="item">
        <label className={todo.complete ? 'complete' : ''}>
            <input checked={todo.complete} onClick={() => completeTodo(todo)} type="checkbox" />
            {todo.data}
        </label>
        <CloseCircleOutlined className="delete" onClick={() => deleteTodo(todo)} />
    </li>
)
export default TodoListItem
