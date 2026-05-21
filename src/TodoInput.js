const TodoInput = ({ todo, setInput, addTodo, isEdit }) => {
	return (
		<div className='input-wrapper'>
			<form onSubmit={addTodo}>
				<input
					type='text'
					name='todo'
					value={todo}
					placeholder='✏️ Add a new task...'
					onChange={e => {
						setInput(e.target.value);
					}}
				/>
				<button type='submit' className='add-button'>
					{isEdit ? '✓ Update' : '+ Add'}
				</button>
			</form>
		</div>
	);
};
export default TodoInput;
