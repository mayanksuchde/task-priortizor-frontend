import React,{Component} from 'react';
import Countdown,{zeroPad} from 'react-countdown';



export default class Task extends Component {
    constructor(props){
        super(props);
        this.state={
            time:0,
        }
    }

    CountdownTime=(level)=>{
        let time=0
        switch(level){
            case 1:
            case "1":
                time= 7200000;
                break;
            case 2:
            case "2":
                time= 14400000;
                break;
            case 3:
            case "3":
                time= 28800000;
                break;
            case 4:
            case "4":
                time= 50400000;
                break;
            case 5:
            case "5":
                time=  72000000;
                break;
            default:
                time=0;
                break;
        }
        return time;
    }
    renderer=({api,hours,minutes,seconds})=>{
        const {start,pause, isCompleted, isPaused}=api;
        const paused=isPaused();
        return(
            <div>{ (!paused)
                    ?(
                        <span>
                            {zeroPad(hours)}:{zeroPad(minutes)}:{zeroPad(seconds)}
                        </span> 
                    ):(<span></span>)
                }
                
                <button onClick={()=>{start();}}>Start</button>
                <button onClick={()=>{pause();}}>Pause</button>
                <button onClick={()=>{isCompleted();}}>Complete</button>
            </div>
        )
    }
    render() {
        let {task,startTimer,pauseTimer,completeTimer,id}=this.props;
        let duration = task.duration/1000,
            hours = Math.floor(duration/3600),
            minutes = Math.floor((duration%3600)/60),
            seconds = Math.floor((duration%3600)%60);
        

        return(
            <li className='task' draggable='true' >
                <h5>{task.name}</h5>
                {/* <button onClick={()=>{complete();}}>Complete</button> */}
                <Countdown 
                    date={task.initialTime+this.CountdownTime(task.level)}
                    autoStart={false}
                    precision={3}
                    renderer={this.renderer}
                    onComplete={()=>completeTimer}
                    onStart={()=>startTimer(id)}
                    onPause={()=>pauseTimer(id)}
                    onComplete={()=>completeTimer(id)}
                    />
        {(task.duration!==0)?(<p>Total Duration:{hours} hours, {minutes} minutes, {seconds} seconds</p>):(<span></span>) }
            </li>
        )
    }
}

