import { useState } from "react"
import "./todoAdder.scss"
import { FiPlus } from "react-icons/fi"
import PropTypes from "prop-types"
import useRandomid from "../../hooks/useRandomid"

const TodoAdder = ({ todos, setTodos }) => {
  const id = useRandomid()
  // input-qiymati-olish
  const [todoname, setTodoname] = useState("")

  const [tododata, setTododata] = useState("")

  // form-submit
  const handleCreateTodo = e => {
    e.preventDefault()

    if (todoname.trim().length >  1) {
      const todo = {
        id: id,
        todoname: todoname,
        isCompleted: false,
        isEdited: false,
        isEditing: false,
        date: new Date(),
        alarm: new Date().getTime() + 200000
      }
      setTodos([...todos, todo])
      setTodoname("")
      console.log(todoname);
    } else {
      console.log(false);
    }
    // (...todos => Bu oldingi ma'lumotni o'chirmaydi)
  }
  return (
    <div className="todo-adder">
      <h1 className="adder__title">Todolist</h1>
      <form className="adder__form" onSubmit={handleCreateTodo}>
        <div className="form__input-wrapper">
          <label htmlFor="todoinput">Todo name</label>
          <input type="text" id="todo-input" value={todoname} onChange={e => setTodoname(e.target.value)} />
        </div>
        <button type="submit"><FiPlus />Create</button>
      </form>
    </div>
  )
}
TodoAdder.PropTypes = ({
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  setTodos: PropTypes.func.isRequired
})
export default TodoAdder