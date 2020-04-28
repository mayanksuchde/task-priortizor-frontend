import React,{Component} from 'react';
import StopWatch from './StopWatch';



export default class Task extends Component {
    constructor(props){
        super(props);
        this.state={
            time:0,
        }
    }
    startWatch=(id)=>{
        this.props.startTimer(id);
        this.timer = setInterval(() => this.setState({
            time: Date.now() - this.state.start
          }), 1);
        
    }

    render() {
        let {task,startTimer,pauseTimer,id}=this.props
        return(
            <li>
                <h5>{task.name}</h5>
                <span>{task.start}</span>
                {(task.start==="")?
                    (<button onClick={()=>{startTimer(id)}} >Start</button>):
                    (<button onClick={()=>{pauseTimer(id)}} >Pause</button>)
                }
                <button>Complete</button>
                <StopWatch time={this.state.time} />
        {(task.duration!==0)?(<p>Total Duration:{task.duration/1000} seconds</p>):(<span></span>) }
            </li>
        )
    }
}
