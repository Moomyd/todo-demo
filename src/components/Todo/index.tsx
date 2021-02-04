import React, { useState } from 'react'
import { Todo, Count } from '../types'
import AddTodoForm from '../AddTodo'
import './index.css'
import Footer from '../Footer'

const initialTodos: Todo[] = [{ data: '写todo', complete: false }]
const initCount: Count = 1

const Todos: React.FC = () => {
    const [todos, setTodos] = useState(initialTodos)
    const [count, setCount] = useState(initCount)
    const addTodo = (newTodo: string) => {
        if (newTodo.trim() === '')
            // 空值，则跳过
            return
        setTodos([
            ...todos,
            {
                data: newTodo,
                complete: false
            }
        ])
        setCount(count + 1)
    }

    const completeTodo = (selectedTodo: Todo) => {
        if (!selectedTodo.complete) {
            setCount(count - 1)
        }
        if (selectedTodo.complete) {
            setCount(count + 1)
        }
        const newTodos = todos.map((todo) => {
            if (todo === selectedTodo) {
                return {
                    ...todo,
                    complete: !todo.complete
                }
            }
            return todo
        })
        setTodos(newTodos)
    }
    const deleteTodo = (oldTodo: Todo) => {
        if (oldTodo.complete === false) {
            setCount(count - 1)
        }
        const newTodos = [...todos]
        newTodos.map((todo, i) => {
            if (todo === oldTodo) {
                newTodos.splice(i, 1)
            }
            return todo
        })
        setTodos(newTodos)
    }
    const clearCompleted = () => {
        const newTodos = todos.filter((todo) => {
            return todo.complete === false
        })
        setTodos(newTodos)
    }
    function areAllComplete() {
        let flag = true
        todos.map((todo) => {
            if (todo.complete === false) {
                flag = false
            }
        })
        if (flag) {
            return true
        }
        return false
    }
    const completeAll = () => {
        if (areAllComplete()) {
            const newTodos = todos.map((todo) => {
                return {
                    ...todo,
                    complete: false
                }
            })
            setCount(todos.length)
            setTodos(newTodos)
        } else {
            const newTodos = todos.map((todo) => {
                return {
                    ...todo,
                    complete: true
                }
            })
            setCount(0)
            setTodos(newTodos)
        }
    }
    return (
        <div className="body">
            <AddTodoForm addTodo={addTodo} />
            {!!todos.length && (
                <Footer
                    todos={todos}
                    count={count}
                    completeTodo={completeTodo}
                    deleteTodo={deleteTodo}
                    clearCompleted={clearCompleted}
                    completeAll={completeAll}
                />
            )}
        </div>
    )
}

export default Todos
