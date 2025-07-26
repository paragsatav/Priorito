import React, {useEffect} from "react";
import "./taskform.css"
import Tag from "./tag";
import { useState } from "react";


const TaskForm = ({setTasks}) => {
    useEffect(()=>{
        document.title = 'Priorito';
    },[]);
    const [taskData, settaskdata] = useState({
        task: "",
        status: "todo",
        tags : []
    });

    const handlechange = (e) => {
        const {name, value} = e.target;

        settaskdata(prev => {
            return {...prev, [name] : value};
        })
    };

    const handlesubmit = (e) =>{
        e.preventDefault();
        console.log(taskData);
        setTasks(prev => {
            return [...prev, taskData]
        })
        settaskdata({
        task: "",
        status: "todo",
        tags : []
    })
    };

    const checkTag = (tag) =>{
        return taskData.tags.some(item => item === tag)
    }

    const selectTags =(tag) =>{
        if(taskData.tags.some(item => item === tag)){
            const filtertags = taskData.tags.filter(item => item !== tag)
            settaskdata(prev => {
                return {...prev, tags : filtertags}
            })
        } else{
            settaskdata(prev => {
                return {...prev, tags : [...prev.tags, tag]}
            })
        }
    };
    return (
        <>
        
  
            <div className="flex items-center justify-center"> <span className="flex items-center justify-center font-semibold text-2xl">Study Planner</span> </div>
            <div  className="flex items-center justify-center bg-white p-4 h-full border border-gray-100 rounded-lg shadow">
             <form className="max-md:w-full" onSubmit={handlesubmit}>
                    <input type="text"
                     value={taskData.task}
                     name="task"
                     className="border border-gray-300 duration-200 ease-in-out font-normal rounded-lg py-3 px-4 text-[#222] text-[0.95rem] transition-colors w-full "
                     placeholder="Enter your Task"
                     onChange={handlechange} required/>
                <div className="flex md:flex-row max-md:flex-col gap-1 mt-1">
                    <div className="flex gap-1 items-center justify-center max-md:flex-col md:flex-row">
                        <Tag tagName="HTML" selectTags={selectTags}
                        selected = {checkTag("HTML")}/>
                        <Tag tagName="CSS" selectTags={selectTags}
                        selected = {checkTag("CSS")}/>
                        <Tag tagName="JavaScript" selectTags={selectTags}
                        selected = {checkTag("JavaScript")}/>
                        <Tag tagName="React" selectTags={selectTags}
                        selected = {checkTag("React")}/>
                    </div>
                    <div className="relative w-full flex gap-1 md:flex-row max-md:flex-col items-center justify-center">
                        <select className='text-xs w-1/2 text-black bg-[#f5f5dc] rounded-lg border-none cursor-pointer px-[10px] h-10 transition-transform duration-200 ease-in-out' name="status" 
                         onChange={handlechange}
                          value={taskData.status}>
                            <option value="todo">Todo</option>
                            <option value="Doing">Doing</option>
                            <option value="Done">Done</option>
                        </select>
                        <button className="hover:bg-green-600 p-2 w-full cursor-pointer bg-green-400 rounded-lg text-white transition-[background-color,transform] duration-200 ease-in-out" type="submit">+ Add Task</button>
                    </div>
                </div>
            </form>
            </div>
        </>
    );
}

export default TaskForm;