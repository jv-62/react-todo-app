const TodoInput = ({todo, setTodo, addTodo, isEdit}) => {
    return (
        <div className="input-wrapper">
            <form>
                <input
                    type="text"
                    name="todo"
                    value={todo}
                    placeholder="Create a new todo"
                    onChange={(e) => {
                        setTodo(e.target.value);
                    }}
                />
                <button className="add-button" onClick={addTodo}>{isEdit?'Update':'Submit'}</button>
            </form>
        </div>
    )
}
export default TodoInput;