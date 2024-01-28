import { useState } from 'react';
import './Todo.css';
import { InputTodo } from './components/InputTodo';


export const Todo = () => {
	const [todoText, setTodoText] = useState("");
	const [incompleteTodos, setIncompleteTodos] = useState([]);
	const [completeTodos, setCompleteTodos] = useState([]);
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
	};

	const onClickComplete = (index) => {
		const newTodos = [...incompleteTodos];
		newTodos.splice(index, 1);
		setIncompleteTodos(newTodos);

		const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
		setCompleteTodos(newCompleteTodos);
	};

	const onClickIncomplete = (index) => {
		const newTodos = [...completeTodos];
		newTodos.splice(index, 1);
		setCompleteTodos(newTodos);

		const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
		setIncompleteTodos(newIncompleteTodos);
	};

	return (
		<>
			<InputTodo
				todoText={todoText}
				onChange={onChangeTodoText}
				onClick={onClickAdd}
			/>
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
					{completeTodos.map((todo, index)=> (
							<li key={todo}>
								<div className='list-row'>
									<p className='todo-item'>{todo}</p>
									<button onClick={() => onClickIncomplete(index)}>戻す</button>
								</div>
							</li>
						)
					)}
				</ul>
			</div>
		</>
	);
}
