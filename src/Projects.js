import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Projects extends Component {
    render() {
        return (
            <div>
                <h1>Projects</h1>
                <div>
                    <Link to="/project" >
                        <div className='project-tab'>
                            <h4>Project 1</h4>
                        </div>
                    </Link>
                </div>
            </div>
        )
    }
}
