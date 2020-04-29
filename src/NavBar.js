import React, {Component} from 'react';
import {Link } from 'react-router-dom';
import './NavBar.scss';
import { Timer } from '@material-ui/icons'

class NavBar extends Component{
    render(){
        return(
            <nav>
                <Link to='/'>
                <h3 className="logo">
                    <Timer />
                    YourTime
                </h3>
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