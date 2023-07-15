import './App.css';
import { useState } from 'react';

//Main Component and Functionality
function Todo(props) {
  const [todo, setTodo] = useState(props.data);

  const addTodo = (name) => {
    setTodo([...todo, name]);
  }

  const deleteTodo = (index) => {
    const updatedTodo = [...todo];
    updatedTodo.splice(index, 1);
    const confirmed = window.confirm('Are your sure you want to delete the ' + todo[index]);
    if (confirmed) {
      setTodo(updatedTodo);
    }
  }

  return (
    <div className='main-container'>
      <div className='sub-container'>
        <AddTodo handleSubmit={addTodo} />
        <TodoList data={todo} handleDelete={deleteTodo} />
      </div>
    </div>
  );
}

//Component for displaying list
function TodoList(props) {
  const arr = props.data
  const listItems = arr.map((val, index) => {
    return <p className='list-container' onClick={() => props.handleDelete(index)} key={index}>
      {val}
    </p>
  });
  return (
    <div>{listItems}</div>
  );
}


//Component for UI
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
      <input type='text' placeholder='Add Todo' value={addTodo} onChange={handleChange} required />
      <button type='submit'>Add</button>
    </form>
  );
}

export default Todo;
