type Todo = {
    data: string
    complete: boolean
}
type Count = number
type CompleteTodo = (selectedTodo: Todo) => void
type AddTodo = (newTodo: string) => void
type DeleteTodo = (oldTodo: Todo) => void
type ClearCompleted = () => void
type CompleteAll = () => void
export type { Todo, Count, CompleteTodo, AddTodo, DeleteTodo, ClearCompleted, CompleteAll }
