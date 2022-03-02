import Task from './Task';
import './App.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [name, setName] = useState('');
  const handleSubmit = async (e) => {
    await axios.post('http://localhost:8000/add', {
      name: name,
      isChecked: false
    }).then(res => {
      console.log(res.data)
    })
  }
  useEffect(async() => {
    await axios.get('http://localhost:8000/show').then(res => {
      setTasks(res.data)
    })
  },[tasks]);
    return (
      <div className="App" >
        <main>
          <div className='left'>
            <form onSubmit={handleSubmit}>
              <h1 className='title'>To-Do<br></br> React Edition</h1>
              <input id='name' name='name' className='textbox' placeholder='Введите задание' value={name} onChange={(e) => setName(e.target.value)} />
              <button className='addButton'>Добавить</button>
            </form>
          </div>
          <div className='right'>
            <h1 className='listTitle'>Задания</h1>
            <div className='tasksWrap'>
                <Task tasks={tasks}/>  
            </div>
          </div>
        </main>
      </div>
    )
}

export default App;
