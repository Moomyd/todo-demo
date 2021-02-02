import React, { useState } from 'react'
import TodoList from '../TodoList'
import { ClearCompleted, Count, CompleteTodo, DeleteTodo, Todo } from '../types'
import './index.css'

interface TodoListProps {
    clearCompleted: ClearCompleted
    completeTodo: CompleteTodo
    deleteTodo: DeleteTodo
    todos: Todo[]
    count: Count
}

const Footer: React.FC<TodoListProps> = ({
    todos,
    clearCompleted,
    completeTodo,
    deleteTodo,
    count
}) => {
    const [choose, setChoose] = useState(1)
    return (
        <div>
            <TodoList
                choose={choose}
                completeTodo={completeTodo}
                deleteTodo={deleteTodo}
                todos={todos}
            />
            <div className="footer">
                {count} item left
                <button onClick={() => setChoose(1)} type="button">
                    All
                </button>
                <button onClick={() => setChoose(2)} type="button">
                    Active
                </button>
                <button onClick={() => setChoose(3)} type="button">
                    Completed
                </button>
                <button onClick={clearCompleted} type="button" className="clear">
                    Clear completed
                </button>
            </div>
        </div>
    )
}
export default Footer
