import React, { useState } from 'react'
import TodoList from '../TodoList'
import { ClearCompleted, Count, CompleteTodo, DeleteTodo, Todo, CompleteAll } from '../types'
import './index.css'

interface Props {
    completeAll: CompleteAll
    clearCompleted: ClearCompleted
    completeTodo: CompleteTodo
    deleteTodo: DeleteTodo
    todos: Todo[]
    count: Count
}

const Footer: React.FC<Props> = ({
    todos,
    clearCompleted,
    completeTodo,
    deleteTodo,
    count,
    completeAll
}) => {
    const [choose, setChoose] = useState(1)
    return (
        <div>
            <TodoList
                completeAll={completeAll}
                completeTodo={completeTodo}
                deleteTodo={deleteTodo}
                choose={choose}
                todos={todos}
            />
            <div className="footer">
                <span className="count">{count} item left</span>
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
