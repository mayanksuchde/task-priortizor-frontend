import React, { Component } from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';
import DialogForm from './DialogForm';

export default class Project extends Component {
    constructor(props){
        super(props);
        this.state={
            taskList:[],
        }
    }
    pushTask=(data)=>{
        let newList=this.state.taskList;
        newList.push(data);
        this.setState({
            taskList:newList
        });
        this.resetForm()
        
    }
    startTimer=(id)=>{
        let currentTime=Date.now();
        let newList=this.state.taskList;
        
        newList.forEach((task,index)=>{
            if(index===id){
                task.start=currentTime
            }
        });
        this.setState({taskList:newList});
    }
    pauseTimer=(id)=>{
        let currentTime=Date.now();
        let newList=this.state.taskList;
        let originalTime=this.state.taskList[id].start
        console.log(originalTime)
        newList.forEach((task,index)=>{
            if(index===id){
                task.start='';
                task.duration+=(currentTime-originalTime);
            }
        });
        this.setState({taskList:newList})
        
    }
    resetForm=()=>{
        this.setState({
            name: '',
            description: '',
            level: '',
            start:'',
            complete:'',
            
        })
    };
    startTimer
    render() {
        const {taskList}=this.state;
        return(
            <div>
                <h2>Project 1</h2>
                <div className="form-container">
                    <DialogForm pushTask={this.pushTask} />
                    <TaskList list={taskList} startTimer={this.startTimer} pauseTimer={this.pauseTimer} />
                </div>
            </div>
        )
    }
}

