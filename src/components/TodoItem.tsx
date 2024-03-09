import { Todo } from "../types/todo"

interface TodoItemProps {
    todo: Todo
    onCompletedChange: (id: number, completed: boolean) => void;
} 

export default function TodoItem({todo, onCompletedChange}: TodoItemProps) {
    return (
        <label className="flex items-center gap-2">
            <input 
                type="checkbox" 
                className="scale-105"
                checked = {todo.completed}
                onChange = {(e) => onCompletedChange(todo.id, e.target.checked)}
            />
            <span className={todo.completed ? "text-gray-300" : "text-gray-900"}>
                {todo.title}
            </span>
        </label>
    )
}