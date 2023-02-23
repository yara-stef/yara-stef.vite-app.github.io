import { useState, useEffect } from 'react'
import './App.css'
import { Button } from '@mui/material';
import { TextField } from '@mui/material';
import { Checkbox } from '@mui/material';

function App() {
  const [checked, setChecked] = useState(true);
  const [todos, setTodos] = useState([]);
  const [todoItem, setTodoItem] = useState('');
  const [error, setError] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoItem) {
      setError(false);
      let uniqueId =
				new Date().getTime().toString(36) + new Date().getUTCMilliseconds();
			let newTodoItem = {
				id: uniqueId,
				todo: todoItem,
				complete: false,
      };
      setTodos([newTodoItem, ...todos]);
      setTodoItem('');
    } else {
      setError(true);
       setTodoItem('');
    }
  }
  
  return (
    <div className="App">
      <h1>todos</h1>
      <span>
        <TextField fullWidth label="Add Todo..." id="fullWidth" value={todoItem} onChange={(e) => setTodoItem(e.target.value)} />
        <Button variant="text" onClick={handleSubmit}>Submit</Button> 
      </span>
       <span></span>
      <div>
        <Checkbox
        checked={checked}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'controlled' }}
        />
        <span> { todos } </span>
        <Button variant="text">Delete</Button>
      </div>
      
      
      
    </div>
  )
}

export default App
