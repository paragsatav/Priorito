import React, { useEffect, useState } from 'react'
import "./App.css"
import TaskForm from './assets/components/taskform';
import TaskSection from './assets/components/tasksections';
import todo from './assets/todo.jpg';
import doing from './assets/doing.jpeg';
import done from './assets/done.jpeg';

const oldTasks = localStorage.getItem("tasks");
console.log(oldTasks);

const App = ()  => {
  const [tasks, setTasks] = useState(JSON.parse(oldTasks) || []);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])

  const handledelete = (taskindex) => {
  const newTask = tasks.filter((task, index) => index !== taskindex);
  setTasks(newTask);
  };

  const onDrop = (status, position) => {
    console.log(`${status} and position is ${position} and ${activeCard}`)

    if(activeCard === null || activeCard === undefined) return;

    const taskMove = tasks[activeCard];
    const updatedTask = tasks.filter((task, index) => index !== activeCard)

    updatedTask.splice(position,0,{
      ...taskMove ,
      status : status
    })
    setTasks(updatedTask);
  }


  return (
    <div className='flex flex-col items-center justify-center  w-full h-screen bg-gray-50'>
      <div className="flex flex-col gap-3 md:m-auto max-md:mx-2 max-md:my-auto max-md:w-full max-md:px-4 w-fit">
          <TaskForm setTasks= {setTasks}/>
          <div className='flex gap-1 lg:flex-row max-lg:flex-col'>
            <TaskSection taskName="To Do" icon={todo} 
              tasks={tasks} status="todo" handledelete={handledelete}
              setActiveCard={setActiveCard} onDrop={onDrop}/>
            <TaskSection taskName="Doing" icon={doing} 
              tasks={tasks} status="Doing" handledelete={handledelete}
              setActiveCard={setActiveCard} onDrop={onDrop}/>
            <TaskSection taskName="Done" icon={done} 
              tasks={tasks} status="Done" handledelete={handledelete}
              setActiveCard={setActiveCard} onDrop={onDrop}/>
          </div>
      </div>
    </div>
  );
}

export default App
