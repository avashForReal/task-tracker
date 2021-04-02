import { useState } from 'react'

import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'



const App = () => {
  const [show, setShow] = useState(false);

  const [tasks, setTasks] = useState(
    [
      {
        id: 1,
        text: 'do shit',
        day: 'someday',
        reminder: true
      },
      {
        id: 2,
        text: 'doing shit',
        day: 'noday',
        reminder: true
      },
      {
        id: 3,
        text: 'done shit',
        day: 'lolday',
        reminder: false
      }
  ]);


  //add tasks
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = {id, ...task};
    setTasks([...tasks, newTask])
  }

  //delete tasks
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  const toggleRemainder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
  }

  return (
    <div className="container">
      <Header show={show} onShow={() => setShow(!show)}/>
         
      { show && <AddTask onAdd={addTask}/> }
      {/* conditional rendering */}
      { tasks.length > 0 ? <Tasks tasks={tasks} onToggle={toggleRemainder}  onDelete={deleteTask} /> : 'No tasks to show!'}

    </div>
  )
}

export default App