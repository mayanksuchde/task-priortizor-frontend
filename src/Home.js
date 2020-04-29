import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class Home extends Component {
    render() {
        return (
            <div className="container-fluid home">   
       <div className="row p-2">
        <div className="col my-auto ml-2">
           <h1><i className="fas fa-stopwatch fa-2x"></i>YOURTIME</h1>            
        </div>
       </div>
       <div className="row" id="home-content">
           <div className="col-3">
               <img src="./freelancer.png" className="img-fluid" id="img" />
           </div>
           <div className="col-6">
               <p>Are you an occasional, or frequent, remote</p>
                <p>digital pro? If so, it's time to...</p>

               <h3>Master Your Workflow</h3>
                
                <p>Learn how to accurately assess how much</p>   
                <p>time it takes for you to complete projects</p> 
                <p>for your clients or boss</p>
                <Link to='/learnmore'>
                <button type="button" className="btn btn-primary btn-lg">LEARN MORE</button>
                </Link>
           </div>
       </div>
    </div>
        )
    }
}
