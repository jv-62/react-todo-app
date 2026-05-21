const TodoList = ({ list, edit, remove, checked, searchTerm, setSearchTerm, filter, setFilter, handleClearCompletedTodo }) => {
	return (
		<>
			{(list?.length > 0 || searchTerm || filter !== 'All') && (
				<>
					<div className='filter-wrapper mb-4'>
						<input
							type='search'
							value={searchTerm}
							placeholder='🔍 Search tasks...'
							style={{ width: '100%', maxWidth: '300px' }}
							onChange={e => {
								setSearchTerm(e.target.value);
							}}
						/>
						<select className='custom-select w-25' value={filter} onChange={e => setFilter(e.target.value)}>
							<option value='All'>All Tasks</option>
							<option value='Uncompleted'>To Do</option>
							<option value='Completed'>Done</option>
						</select>
						{list.filter(elem => elem.completed).length > 0 && (
							<button className='clear-button' onClick={handleClearCompletedTodo}>
								🗑️ Clear Done
							</button>
						)}
					</div>
				</>
			)}
			{list?.length > 0 ? (
				<ul className='todo-list'>
					{list.map((todo, index) => (
						<div key={index + todo} className='todo'>
							<li className={todo.completed ? 'completed' : ''}>
								<input className='form-check-input' type='checkbox' checked={todo.completed} onChange={() => checked(index)} />
								<span className={todo.completed ? 'text-decoration-line-through ms-2' : 'ms-2'}>{todo.name}</span>
							</li>
							<div className='button-wrapper'>
								<button
									className='delete-button'
									onClick={() => {
										remove(todo.name);
									}}
									title='Delete task'>
									🗑️
								</button>
								<button
									disabled={todo.completed}
									className='add-button'
									onClick={() => {
										edit(index);
									}}
									title='Edit task'>
									✎
								</button>
							</div>
						</div>
					))}
				</ul>
			) : (
				<div className='empty'>
					<p>🎉 No tasks to show! Create one to get started.</p>
				</div>
			)}
		</>
	);
};

export default TodoList;
