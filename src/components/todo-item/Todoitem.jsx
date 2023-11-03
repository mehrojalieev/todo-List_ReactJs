import "./todoItem.scss"
import { formatdate } from "../../helpers/formatdate"
import { useState } from "react"

const Todoitem = ({ id, todoname, isCompleted, isEdited, isEditing, date, alarm, todos, setTodos }) => {
    const [todoactions, setTodoactions] = useState(false)
    const { hours, minutes } = formatdate(date)
    formatdate(date)

    const handleToggleActions = (e) => {
        if (e.target.closest(".todo-item")) {
            setTodoactions(!todoactions)
        }
    }
    const handleCompleteTask = (id) => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo))
    }

    // Delete
    const handleDeleteTask = (id) => {
        setTimeout(() => {
            setTodos(todos.filter(todo => todo.id !== id && todo))
        }, 300)

    }
    return (
        <>
            <div className="todo-item" onClick={handleToggleActions}>
                <div className={`item__content-wrapper ${isCompleted && "item__content-wrapper--active"}`}>
                    <h3 className="item__name">{todoname}</h3>
                    <p className="item__date">{`${hours} : ${minutes}`}</p>
                </div>
                <div onClick={e => e.stopPropagation()} className={todoactions ? "item__actions item__actions--active" : "item__actions"}>
                    <button onClick={() => handleCompleteTask(id)}>Complete</button>
                    <button>Edit</button>
                    <button onClick={() => handleDeleteTask(id)}>Delete</button>
                </div>
            </div>
        </>
    )
}

export default Todoitem