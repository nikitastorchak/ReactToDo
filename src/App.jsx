import axios from 'axios';
import Task from './Task';
import Modal from './Modal';
import { useEffect, useState } from 'react';
import './App.scss';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [name, setName] = useState('');
  const [active, setActive] = useState(false);
  const [editTask, setEditTask] = useState([]);
  const [editTaskNew, setEditTaskNew] = useState([]);
  const [idx, setIdx] = useState();

  const handleSubmit = async (e) => {
    if(name){
      await axios.post('http://localhost:8000/add', {
        name: name,
        isChecked: false
      }).then(res => {});
    } else {
      alert('Вы ввели пустое задание!');
    }
  }

  useEffect(async() => {
    await axios.get('http://localhost:8000/show').then(res => {
      setTasks(res.data);
    });
  },[tasks]);

  return (
    <div className="App" >
      <main>  
        <Modal active={active} setActive={setActive} idx={idx} setIdx={setIdx} editTask={editTask} setEditTask={setEditTask} editTaskNew={editTaskNew} >
          <input id='name' name='name' className='textbox' placeholder='Введите задание' value={editTask} onChange={(e) => {setEditTaskNew(e.target.value); setEditTask(e.target.value)}} />
        </Modal>
        <div className='left'>
          <form onSubmit={handleSubmit}>
            <h1 className='title'>To-Do<br></br>React Edition</h1>
            <input id='name' name='name' className='textbox' placeholder='Введите задание' value={name} onChange={(e) => setName(e.target.value)} />
            <button className='addButton'>Добавить</button>
          </form>
        </div>
        <div className='right'>
          <h1 className='listTitle'>Задания</h1>
          <div className='tasksWrap'>
            <Task idx={idx} setTasks={setTasks} setIdx={setIdx} tasks={tasks} active={active} setActive={setActive} editTask={editTask} setEditTask={setEditTask}/>         
          </div>
        </div>
      </main>
    </div>
  )
};

export default App;
