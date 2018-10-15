import React, { Component } from 'react';
import './Home.css';

export default class Home extends Component {
  constructor(props){
      super(props);
  }
  render() {
    return (
      <div 
       className="home-main">
        <div
          className='home-main-skills'>
            <h4
             className="home-header">
              Main Back-End Skills
            </h4>
            <div
              className="home-main-frameworks">
              <p
               className="home-styled-paragraph">
                
              </p>
            </div>
            <div
             className={"home-main-skills-row"}>
              <div
                className={'home-icon-button-main'}
                onClick={()=>{console.log('Hello, world')}}>
                  <i className="fab fa-python home-icon"></i>
                  <p
                  className={"home-icon-title"}>
                    {'Python'}
                  </p>
              </div>
              <div
              className={'home-icon-button-main'}>
                <i className="fab fa-node-js home-icon"></i>
                <p
                  className={"home-icon-title"}>
                    {'Javascript'}
                  </p>
              </div>
            </div>
           
        </div>
        <div
          className='home-second-row'>
            <div
              className={'home-icon-button'}>
                <i className="fab fa-node home-icon"></i>
                <p
                 className={"home-icon-title"}>
                  {'Nodejs'}
                </p>
            </div>
            <div
              className={'home-icon-button'}>
                <i className="fab fa-java home-icon"></i>
                <p
                 className={"home-icon-title"}>
                  {'Java'}
                </p>
            </div>
            <div
              className={'home-icon-button'}>
                <i className="fab fa-html5 home-icon"></i>
                <p
                 className={"home-icon-title"}>
                  {'HTML'}
                </p>
            </div>
            <div
             className={'home-icon-button'}>
               <i className="fab fa-css3-alt home-icon"></i>
               <p
                 className={"home-icon-title"}>
                  {'CSS'}
                </p>
            </div>
            <div
             className={'home-icon-button'}>
               <i className="fab fa-node home-icon"></i>
               <p
                 className={"home-icon-title"}>
                  {'JQuery'}
                </p>
            </div>
            <div
             className={'home-icon-button'}>
               <i className="fab fa-react home-icon"></i>
               <p
                 className={"home-icon-title"}>
                  {'React and React Native'}
                </p>
            </div>
            
        </div>

      </div>
    );
  }
}

