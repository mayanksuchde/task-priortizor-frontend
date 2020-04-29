import React, { Component } from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';
import DialogForm from './DialogForm';

export default class Project extends Component {
    constructor(props){
        super(props);
        this.state={
            taskList:[
                { 
                    name:"Create Projects Page",
                    initialTime:1588135855486,
                    start:"",
                    completed:false,
                    description:"Page to see all the projects",
                    duration:0,
                    level:2 
                },
                {
                    name:"Make Landing Page",
                    initialTime:1588135855486,
                    start:"",
                    completed:false,
                    description:"",
                    duration:0,
                    level:1
                },
                {
                    name:"Do Something",
                    initialTime:1588135855486,
                    start:"",
                    completed:false,
                    description:"Do anything",
                    duration:0,
                    level:5
                }],
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
    completeTimer=(id)=>{
        let currentTime=Date.now();
        let newList=this.state.taskList;
        
        newList.forEach((task,index)=>{
            if(index===id){
                task.completed=true;
                task.duration+=(currentTime-this.state.taskList[id].start);
                task.date_end = currentTime;
            }
        });
        this.setState({taskList:newList});
    }
    resetForm=()=>{
        this.setState({
            name: '',
            description: '',
            level: '',
            start:'',
            completed:false,
            initialTime:'',
            
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
                    <TaskList list={taskList} startTimer={this.startTimer} pauseTimer={this.pauseTimer} completeTimer={this.completeTimer}/>
                </div>
            </div>
        )
    }
}

