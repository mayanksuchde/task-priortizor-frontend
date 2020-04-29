import React,{Component} from 'react';
import Countdown,{zeroPad} from 'react-countdown';
import Button from '@material-ui/core/Button';
import { Timer, CheckCircle,PauseCircleFilled } from '@material-ui/icons'

export default class Task extends Component {
    constructor(props){
        super(props);
        this.state={
            time:0,
        }
    }
    // startWatch=(id)=>{
    //     this.props.startTimer(id);
    //     this.timer = setInterval(() => this.setState({
    //         time: Date.now() - this.state.start
    //     }), 1);
        
    // }
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
        const {start,pause,isPaused}=api;
        const paused=isPaused();
        return(
            <div>{ (!paused)
                    ?(
                        <span className='timer'>
                            {zeroPad(hours)}:{zeroPad(minutes)}:{zeroPad(seconds)}
                        </span> 
                    ):(<span></span>)
                }
                
                <Button 
                    variant='contained' 
                    color='primary' 
                    startIcon={<Timer/>} 
                    onClick={()=>{start();}}>Start</Button>
                <Button 
                    variant='contained' 
                    color='secondary'
                    startIcon={<PauseCircleFilled/>} 
                    onClick={()=>{pause()}}>Pause</Button>
            </div>
        )
    }
    render() {
        let {task,startTimer,pauseTimer,id,completeTask}=this.props
        return(
            <li className={(task.completed)?'task completed':'task'} draggable='true' >
                <h5>{task.name}</h5>
                
                <div className="buttons">
                    <Countdown 
                        date={task.initialTime+this.CountdownTime(task.level)}
                        autoStart={false}
                        precision={3}
                        renderer={this.renderer}
                        onStart={()=>startTimer(id)}
                        onPause={()=>pauseTimer(id)}
                        />
                    <Button 
                        variant='contained'
                        startIcon={<CheckCircle/>}
                        color='default'
                        onClick={()=>{completeTask(id)}}
                        >Complete</Button>
        {(task.duration!==0)?(<p className='duration'>Total Duration:<span>{task.duration/1000} seconds</span></p>):(<p></p>) }
                </div>
            </li>
        )
    }
}

//level1: 1-2hours;
//level2: 4hours;
//level3: 8hours;
//level4: 14hours;
//level5: 20hours;
