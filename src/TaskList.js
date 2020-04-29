import React from 'react'
import Task from './Task';
function TaskList({list,startTimer,pauseTimer,completeTimer}){
    
    return(
        <ul className="task-list">
            {list.map((task,i)=>(
                <Task 
                    key={i} 
                    id={i} 
                    task={task} 
                    startTimer={startTimer}
                    pauseTimer={pauseTimer}
                    completeTimer={completeTimer} />))}
        </ul>
    )
}
export default TaskList;