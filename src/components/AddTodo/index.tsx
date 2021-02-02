import React, { useState, ChangeEvent, FormEvent } from 'react'
import { AddTodo } from '../types'
import './index.css'

interface Props {
    addTodo: AddTodo
}

const AddTodoForm: React.FC<Props> = ({ addTodo }) => {
    const [newTodo, setNewTodo] = useState('')
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTodo(e.target.value)
    }
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        addTodo(newTodo)
        setNewTodo('')
    }
    return (
        <div className="header">
            <h1>todos</h1>
            <form onSubmit={handleSubmit}>
                <input
                    className="addTodo"
                    type="text"
                    value={newTodo}
                    onChange={handleChange}
                    placeholder="What needs to be done?"
                />
            </form>
        </div>
    )
}
export default AddTodoForm
