import React,{Component} from 'react';
import Countdown,{zeroPad} from 'react-countdown';



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
                        <span>
                            {zeroPad(hours)}:{zeroPad(minutes)}:{zeroPad(seconds)}
                        </span> 
                    ):(<span></span>)
                }
                
                <button onClick={()=>{start();}}>Start</button>
                <button onClick={()=>{pause()}}>Pause</button>
            </div>
        )
    }
    render() {
        let {task,startTimer,pauseTimer,id}=this.props
        return(
            <li className='task' draggable='true' >
                <h5>{task.name}</h5>
                
                <button>Complete</button>
                <Countdown 
                    date={task.initialTime+this.CountdownTime(task.level)}
                    autoStart={false}
                    precision={3}
                    renderer={this.renderer}
                    onStart={()=>startTimer(id)}
                    onPause={()=>pauseTimer(id)}
                    />
        {(task.duration!==0)?(<p>Total Duration:{task.duration/1000} seconds</p>):(<span></span>) }
            </li>
        )
    }
}

//level1: 1-2hours;
//level2: 4hours;
//level3: 8hours;
//level4: 14hours;
//level5: 20hours;
