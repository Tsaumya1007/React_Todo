import { useState } from "react";
import TodoForm from "./components/TodoForm";
import Todos from "./components/Todos";
import "./App.css"


function App() {
    const [countTasks,setCountTasks]= useState(4);
    const [remainTasks,setRemainTasks]= useState(4);
    const [todos, setTodos] = useState([
        { id: 1, title: "Something Here", completed: false },
        { id: 2, title: "CSS", completed: false },
        { id: 3, title: "HTML", completed: false },
        { id: 4, title: "Vue", completed: false },
    ]);
    const addTodo = (newTodo) => {
        setTodos((prevState) => [...prevState, newTodo]);
        setCountTasks(countTasks+1);
        setRemainTasks(remainTasks+1);
    };
    const removeTodo = (id) => {
        setTodos((prevState) => prevState.filter((todo) => todo.id !== id));
        setCountTasks(countTasks-1);
        setRemainTasks(remainTasks-1);
    };
    const toggleCompleted = (id) => {
        setTodos((prevState) => {
            return prevState.map((todo) => {
                if (todo.id === id) {
                    if(!todo.completed)
                    setRemainTasks(remainTasks-1);
                    else
                    setRemainTasks(remainTasks+1);
                    return { ...todo, completed: !todo.completed };
                } else {
                    return todo;
                }
            });
        });
    };
    return (
        <div className="container">
           <div className="heading">
            <h2>{countTasks} Todo  </h2>
            <h3> {remainTasks} Remains</h3>
            </div>
            <Todos
                todos={todos}
                toggleCompleted={toggleCompleted}
                removeTodo={removeTodo}
            />
            <br/>
            <TodoForm addTodo={addTodo} />
        </div>
    );
}

export default App;