import { useState } from "react";
import { v4 as uuid } from "uuid";
import "./todo.css"

function TodoForm({ addTodo }) {
    const [title, setTitle] = useState("");
    function handleSubmit(e) {
        e.preventDefault();
        if (title.trim().length === 0) {
            return;
        }
        const newTodo = {
            title: title,
            completed: false,
            id: uuid(),
        };
        addTodo(newTodo);
        setTitle("");
    }
    return (
        <form onSubmit={handleSubmit} className="todoForm">
            <input
                className="todoForm__input"
                type="text"
                placeholder="  Add task"
                value={title}
                onChange={(e) => setTitle(e.target.value)
                }
            />
            <button type="submit" className="todoForm__btn">
                Add
            </button>
        </form>
    );
}

export default TodoForm;