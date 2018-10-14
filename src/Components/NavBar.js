import React, { Component } from 'react';
import './NavBar.css';

export default class NavBar extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div
             className={'navbar-main-div'}>
                <div
                 className={'navbar-logo-div'}>
                    <i className="fas fa-laptop-code navbar-icon"></i>
                </div>
                <div
                 className={"navbar-links-div"}>
                    <p
                     className="navbar-link">
                        {`Home`}
                    </p>
                    <p
                     className="navbar-link">
                        {`About`}
                    </p>
                    <p
                     className="navbar-link">
                        {`Blog`}
                    </p>
                    <p
                     className="navbar-link">
                        {`Contact`}
                    </p>
                </div>
            </div>
        )
    }
}