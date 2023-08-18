import { useMemo, useState } from "react";
import "./App.css";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("All");
  const [isEdit, setIsEdit] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState(null);
  
  const filterTodos = useMemo(() => {
    return todos.filter((elem) => {
      if(searchTerm){
        return elem.name.toLowerCase().includes(searchTerm.toLowerCase())
      }else if(filter !== "All"){
        if(filter === "Uncompleted"){
          return elem.completed === false;
        }else{
          return elem.completed === true;
        }
      }
      return elem
    })
  }, [searchTerm, filter, todos] );

  const addTodo = (e) => {
    e.preventDefault();
    if (todo !== "") {
      if(isEdit){
        const newTodoItems = [...todos];
        newTodoItems.forEach((element, index) => {
          if(index === selectedTodo){
            element.name = todo;
          }
        });
        setTodos(newTodoItems);
        setIsEdit(false);
        setSelectedTodo(null);
      }else{
        setTodos([...todos, {name:todo, completed:false}]);
      }
      setTodo("");
    }
  };
  
  const handleClearCompletedTodo = () => {
    setTodos(todos.filter(items => !items.completed));
  }
  
  const handleEdit = (index) => {
    setIsEdit(true);
    setSelectedTodo(index);
    setTodo(todos[index].name);
  }

  const deleteTodo = (text) => {
    const newTodos = todos.filter((todo) => {
      return todo.name !== text;
    });
    setTodos(newTodos);
  };
  
  const handleChecked = (index) => {
    const newTodoItems = [...todos];
    newTodoItems[index].completed === false ? (newTodoItems[index].completed = true) : (newTodoItems[index].completed = false);
    setTodos(newTodoItems)
  }

  return (
    <div className="App">
      <h1>React Todo App</h1>

      <TodoInput todo={todo} setTodo={setTodo} addTodo={addTodo} isEdit={isEdit} />

      <TodoList list={filterTodos} edit={handleEdit} remove={deleteTodo} checked={handleChecked} searchTerm={searchTerm} setSearchTerm={setSearchTerm} filter={filter} setFilter={setFilter} handleClearCompletedTodo={handleClearCompletedTodo} />
    </div>
  );
};

export default App;