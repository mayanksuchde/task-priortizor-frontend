import React from 'react'
import Task from './Task';
function TaskList({list,startTimer,pauseTimer}){
    return(
        <ul>
            {list.map((task,i)=>(
                <Task 
                    key={i} 
                    id={i} 
                    task={task} 
                    startTimer={startTimer}
                    pauseTimer={pauseTimer} />))}
        </ul>
    )
}
export default TaskList;