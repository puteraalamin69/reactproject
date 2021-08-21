import { useState } from 'react'
import Header from './components/Header'
import Tasks  from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
  const name = 'Amin'
  const x = true
  const [showAddTask, setShowAddTask] = useState(false)


  const [tasks, setTasks] = useState(
    [
        {
            id: 1,
            text: 'Doctor Appointment',
            day: 'Feb 5th at 2:30pm',
            reminder: true,
        },
        {
            id: 2,
            text: 'Lawyer',
            day: 'Feb 4th at 2:30pm',
            reminder: true,
        },
        {
            id: 3,
            text: 'Food Shopping',
            day: 'Feb 30th at 2:30pm',
            reminder: false,
        },
    ]  
)
  
//  Delete 
  const deleteTask = (id) => {
    // console.log('delete',id)
    setTasks(tasks.filter((task)=> task.id !==id))
  }  
// Toggle reminder
const toggleReminder = (id) => {
    // console.log(id);
    setTasks(tasks.map((task)=> 
    task.id ===id? 
    { ...task, reminder:!task.reminder }: task
    )
  )
}

// Add Task
const addTask = (task) => {
  // console.log(task)
  const id = Math.floor(Math.random() * 10000) + 1
  // console.log(id)
  const newTask = {id, ...task }
  setTasks([...tasks, newTask])
} 


  return ( 
    <div className="container">
      <h1> Hello {name} From React </h1> 
      <h2> Hello { 1 + 1 } </h2>
      <h2> Hello { x? 'Yes' : 'No'} </h2>
      <Header onAdd={() => setShowAddTask(!showAddTask)} 
      showAdd={showAddTask} title='FromApp.js'/>
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks 
        
        tasks={tasks} 
        onDelete={deleteTask} 
        onToggle={toggleReminder}
        
        />               ) :
        (
          'No Tasks To Show'
        ) 
      
      }
      
    </div>
  );
}
 
export default App;
