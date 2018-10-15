import React, { Component } from 'react';
import './Home.css';
import CodeWriter from './CodeWriter';
import myCode from '../Utils/Codes';

export default class Home extends Component {
  constructor(props){
      super(props);
      this['python-button'] = (
        <div 
          className={'home-icon-button-div'}>
          <i className="fab fa-python home-icon"></i>
          <p
          className={"home-icon-title"}>
            {'Python'}
          </p>
        </div>
      );
      this['python-code'] = (
        <CodeWriter code={myCode} />
      )
      this.state= {
        python: this['python-button'],
      }
  }
  changePython(){
    this.setState({
      python: this['python-code'],
    })
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
                {`Django`}
              </p>
              <p
               className={"home-styled-paragraph"}>
                {`Expressjs`}
              </p>
              <p
               className={"home-styled-paragraph"}>
                {`Nodejs`}
              </p>
              <p
               className={"home-styled-paragraph"}>
                {`SQL`}
              </p>
              <p
               className={"home-styled-paragraph"}>
                {`PostgreSQL`}
              </p>
              <p
               className={"home-styled-paragraph"}>
                {`MongoDB`}
              </p>
            </div>
            <div
             className={"home-main-skills-row"}>
              <div
                className={'home-icon-button-main'}
                onClick={()=>{this.changePython()}}>
                  {
                    this.state.python
                  }
              </div>
              <div
              className={'home-icon-button-main'}>
                <div
                 className={'home-icon-button-div'}>
                  <i className="fab fa-node-js home-icon"></i>
                  <p
                    className={"home-icon-title"}>
                      {'Javascript'}
                  </p>
                </div>
              </div>
            </div>
           
        </div>
        <div
         className={"home-secondary-skills"}>
          <h4
             className="home-header">
              Front-End Skills
          </h4>
          <div
              className="home-main-frameworks">
              <p
               className="home-styled-paragraph">
                {`JQuery`}
              </p>
              <p
               className={"home-styled-paragraph"}>
                {`LESS`}
              </p>
              <p
               className={"home-styled-paragraph"}>
                {`AJAX`}
              </p>
              <p
               className={"home-styled-paragraph"}>
                {`BootStrap`}
              </p>
              <p
               className={"home-styled-paragraph"}>
                {`Material-UI`}
              </p>
              <p
               className={"home-styled-paragraph"}>
                {`Fetch`}
              </p>
            </div>
          <div
            className='home-secondary-row'>
              <div
                className={'home-icon-button'}>
                  <i 
                   className="fab fa-html5 home-icon"></i>
                  <p
                  className={"home-icon-title"}>
                    {'HTML'}
                  </p>
              </div>
              <div
              className={'home-icon-button'}>
                <i 
                 className="fab fa-css3-alt home-icon"></i>
                <p
                  className={"home-icon-title"}>
                    {'CSS'}
                  </p>
              </div>
              <div
               className={'home-icon-button'}>
                <i 
                 className="fab fa-react home-icon"></i>
                <p
                 className={"home-icon-title"}>
                    {'React'}
                </p>
                <p
                 className={"home-icon-title"}>
                    {'&'}
                </p>  
                <p
                 className={"home-icon-title"}>
                    {'React Native'}
                </p>  
              </div>
          </div>
        </div>
        <div
         className={"home-secondary-skills"}>
          <h4
              className="home-header">
              {`Other Technologies`}
          </h4>
          <div
           className="home-main-frameworks">
            <p
              className="home-styled-paragraph">
              {`Git`}
            </p>
            <p
              className={"home-styled-paragraph"}>
              {`Docker`}
            </p>
            <p
              className={"home-styled-paragraph"}>
              {`AWS`}
            </p>
            <p
              className={"home-styled-paragraph"}>
              {`Swagger`}
            </p>
          </div>
        </div>
        <div
         className={"home-secondary-skills"}>
          <h4
              className="home-header">
              {`Currently Studying`}
          </h4>
          <div
           className='home-secondary-row'>

            <div
              className={'home-icon-button'}>
                <i 
                  className="fab fa-java home-icon"></i>

                <p
                  className={"home-icon-title"}>
                  {'Java'}
                </p>
            </div>

            <div
              className={'home-icon-button'}>
              <i 
                className="fab fa-cuttlefish home-icon"></i>
              <p
                className={"home-icon-title"}>
                  {'C'}
              </p>
            </div>

            <div
              className={'home-icon-button'}>
              <div
               className={'home-icon-group'}>
                <i 
                  className="fab fa-cuttlefish home-icon"></i>
                <i 
                 className={"fas fa-plus"}>
                </i>
                <i 
                 className={"fas fa-plus"}>
                </i>
              </div>
            
              <p
                className={"home-icon-title"}>
                  {'C++'}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

/*
<div
 className={'home-icon-button'}>
    <i 
      className="fab fa-node home-icon"></i>
    <p
    className={"home-icon-title"}>
      {'Nodejs'}
    </p>
</div>
<div
  className={'home-icon-button'}>
    <i 
      className="fab fa-java home-icon"></i>
    <p
    className={"home-icon-title"}>
      {'Java'}
    </p>
</div>
*/