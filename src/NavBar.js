import React, {Component} from 'react';
import {Link } from 'react-router-dom';
import './NavBar.scss';
class NavBar extends Component{
    render(){
        return(
            <nav>
                <Link to='/'>
                <div className="logo">
                    TaskSter
                </div>
                </Link>
                <div className='nav_right'>
                        <Link to='/projects'>
                            Projects
                        </Link>
                        <Link to='/dashboard'  className='upload-link'>
                            Dashboard
                        </Link>
                        
                    
                </div>
            </nav>
        )
    }
}

export default NavBar;