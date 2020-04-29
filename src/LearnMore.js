import React, { Component } from 'react'

export default class LearnMore extends Component {
    render() {
        return (
            <div className="container-fluid">   
            <div className="row">
            <div className="col my-auto">
                <div className="card border-0">
                <h1 style={{color:'DodgerBlue'}}>YOURTIME  is...</h1>
                <p>
                a time management tool for work-at-home professionals that actually learns along with you.
                <br>
                </br>
                From the start YOURTIME allows you to choose a time frame for completing small, not-so-small, and big projects that you are creating for your company or client.
                <br>
                </br>
                Busy people aren't always sure just how much time it will take them to finish certain tasks. Seemingly small jobs may end up requiring much more time than originally thought. Likewise more intractable problems may overcome more quickly than expected from the start.
                <br>
                </br>
                As a YOURTIME user you'll be invited to choose from a selection of time frames needed to finish assiigned work. You may need more, or less time to bring the work to fruition than you initially thought. In either case, YOURTIME keeps track of the amount of time you required to complete the job.
                <br>
                </br>
                In time, YOURTIME, through its records of your workflow, will help you better understand how your productivity can be measured in timelines. Think of how helpful that would be! 
                </p>
                </div>
            </div>
            <div className="col">
                <div className="col">
                    <img src="./freelancer2.png" className="img-fluid" alt='' />
                </div>
            </div>
            </div>
        </div>
        )
    }
}
