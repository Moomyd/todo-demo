import React from 'react'
import { CloseOutlined } from '@ant-design/icons'
import { Todo, CompleteTodo, DeleteTodo } from '../types'
import './index.css'

interface Props {
    todo: Todo
    completeTodo: CompleteTodo
    deleteTodo: DeleteTodo
}
const TodoListItem: React.FC<Props> = ({ todo, completeTodo, deleteTodo }) => (
    <li className="item">
        <input checked={todo.complete} onClick={() => completeTodo(todo)} type="checkbox" />
        <label className={todo.complete ? 'complete' : ''}>{todo.data}</label>
        <CloseOutlined className="delete" onClick={() => deleteTodo(todo)} />
    </li>
)
export default TodoListItem
