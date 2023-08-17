const TodoList = ({list, edit, remove, checked, searchTerm, setSearchTerm, filter, setFilter, handleClearCompletedTodo}) => {
    return (
        <>
            {(list?.length > 0 || searchTerm || filter !== 'All') && 
                <>
                    <div className="filter-wrapper mb-4">
                        <input 
                            type="search"
                            value={searchTerm}
                            placeholder="Search..."
                            style={{width: '300px'}}
                            onChange={(e) => {
                                setSearchTerm(e.target.value);
                            }}
                        />
                        <select class="custom-select w-25" value={filter} onChange={(e)=> setFilter(e.target.value)}>
                            <option value="All" selected>All</option>
                            <option value="Uncompleted">Uncompleted</option>
                            <option value="Completed">Completed</option>
                        </select>
                        {list.filter(elem => elem.completed).length>0 && 
                            <button className="clear-button" onClick={handleClearCompletedTodo}>Clear Completed Task</button>
                        }
                    </div>
                </>
            }
            {list?.length > 0 ? (
                <ul className="todo-list">
                {list.map((todo, index) => (
                    <div key={index+todo} className="todo">
                        <li style={{borderLeft: todo.completed ? '5px solid #42cf2e' : '5px solid #cf972e'}}> 
                            <input className="form-check-input mt-0" type="checkbox" checked={todo.completed} onChange={
                                () => checked(index)} />
                            <span className={todo.completed?'text-decoration-line-through ms-2':'ms-2'}>{todo.name}</span>
                        </li>
                        <button
                            className="delete-button"
                            onClick={() => {
                                remove(todo.name);
                            }}
                        >
                            Delete
                        </button>
                        <button
                            disabled={todo.completed}
                            style={{cursor: todo.completed?'no-drop':'pointer'}}
                            className="add-button"
                            onClick={() => {
                                edit(index);
                            }}
                        >
                            Edit
                        </button>
                    </div>
                ))}
                </ul>
            ) : (
                <div className="empty">
                <p>No task found</p>
                </div>
            )}
        </>
    )
}

export default TodoList;