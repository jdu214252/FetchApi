import React, { useEffect, useState } from 'react';
import './FetchData.css';

function FetchData() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://run.mocky.io/v3/3a929b74-987d-4f1b-b918-edeef78d925a'); 
        const data = await response.json();
        setTodos(data);
      } catch (error) {
        console.error('Ошибка при получении данных:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Список задач:</h1>
      <ul>
        {todos.map((todo) => (
          <li>
            <span className='title'> Title: </span> {todo.title},
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FetchData;