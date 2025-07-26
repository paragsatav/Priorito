import React, { StrictMode } from "react";
import "./tasksection.css"
import Card from "./card";
import DragArea from "./dragarea";

const TaskSection = ({taskName, icon, tasks, status, handledelete, setActiveCard, onDrop}) => {
    
    return (
        <div className='flex lg:w-1/3 max-lg:w-full flex-col items-start bg-white p-4 h-full border border-gray-100 rounded-lg shadow'>
            <h2 className="sectionHeading">
                <img src={icon} alt="#" className="appimage"></img>{taskName}
            </h2>
            { tasks.map((task, index) => {
                return task.status === status && 
                <React.Fragment key={index} >
                <DragArea onDrop={() => onDrop(status, 0)}/>
                <Card 
                    title={task.task} tags={task.tags} handledelete={handledelete} 
                    index={index} setActiveCard={setActiveCard}/>
                <DragArea onDrop={() => onDrop(status, index +1)}/>
                </React.Fragment>
            })}
        </div>
    );
}

export default TaskSection;