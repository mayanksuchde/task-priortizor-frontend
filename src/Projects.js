import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Projects extends Component {
    render() {
        return (
            <div>
                <h1>Projects</h1>
                <div>
                    <Link to="/project" >
                        Project 1
                    </Link>
                </div>
            </div>
        )
    }
}
