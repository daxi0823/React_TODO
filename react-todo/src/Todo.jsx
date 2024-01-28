import { useState } from 'react';
import './Todo.css';


export const Todo = () => {
	const [todoText, setTodoText] = useState("");
	const [incompleteTodos, setIncompleteTodos] = useState([
		"TODO1",
		"TODO2"
	]);
	const [completeTodos, setCompleteTodos] = useState([
		"TODO3",
		"TODO4"
	]);
	const onChangeTodoText = (e) => setTodoText(e.target.value);

	const onClickAdd = () => {
		if (todoText === "") return;
		const newTodos = [...incompleteTodos, todoText];
		setIncompleteTodos(newTodos);
		setTodoText("");
	};

	const onClickDelete = (index) => {
		const newTodos = [...incompleteTodos];
		newTodos.splice(index, 1);
		setIncompleteTodos(newTodos);
	}

	const onClickComplete = (index) => {
		const newTodos = [...incompleteTodos];
		newTodos.splice(index, 1);
		setIncompleteTodos(newTodos);

		const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
		setCompleteTodos(newCompleteTodos);
	}

	return (
		<>
			<div className="input-area">
				<input
					placeholder='TODOを入力'
					value={todoText}
					onChange={onChangeTodoText}
				/>
				<button onClick={onClickAdd}>追加</button>
			</div>
			<div className='incomplete-area'>
				<p className='title'>未完了のTODO</p>
				<ul>
					{incompleteTodos.map((todo, index) => (
							<li key={todo}>
								<div className='list-row'>
									<p className='todo-item'>{todo}</p>
									<button onClick={() => onClickComplete(index)}>完了</button>
									<button onClick={() => onClickDelete(index)}>削除</button>
								</div>
							</li>
						)
					)}
				</ul>
			</div>
			<div className='complete-area'>
				<p className='title'>完了のTODO</p>
				<ul>
					{completeTodos.map((todo)=> (
							<li key={todo}>
								<div className='list-row'>
									<p className='todo-item'>{todo}</p>
									<button>戻す</button>
								</div>
							</li>
						)
					)}
				</ul>
			</div>
		</>
	);
}
