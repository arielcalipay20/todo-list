import './App.css';
import { useState } from 'react';

function Todo(props) {
  const [todo, setTodo] = useState(props.data);

  const addTodo = (name) => {
    setTodo([...todo, name]);
  }

  return (
    <>
      <AddTodo handleSubmit={addTodo} />
      <TodoList data={todo} />
    </>
  );
}

function TodoList(props) {
  const arr = props.data
  const listItems = arr.map((val, index) => {
    return <li key={index}>{val}</li>
  });
  return (
    <ol>{listItems}</ol>
  );
}

function AddTodo(props) {
  const [addTodo, setAddTodo] = useState('');

  const handleChange = (e) => {
    setAddTodo(e.target.value);
  }

  const handleSubmit = (e) => {
    if (addTodo !== '') {
      props.handleSubmit(addTodo);
      alert('Successfully add the ' + addTodo);
      setAddTodo('');
    }
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' placeholder='add todo' value={addTodo} onChange={handleChange} />
      <button type='submit'>add</button>
    </form>
  );
}

export default Todo;
