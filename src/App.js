import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import Slider from './Components/Slider';
import About from './Components/About';
import StyledContact  from './Components/Contact';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      setting: false, 
      navbar: null, 
      slide: null, 
      source: null,
      activeIndex: 0, 
    }
  }
  componentDidUpdate(){
    console.log("main App updated");
    /*
    if(this.state.setting !== true){
      this.state.slide.setState({
        insideChange: false,
      });
    }
    else{
      console.log('setting');
      console.log(this.state.slide);
      console.log(this.state.navbar);
    }
    */
  }
  componentDidMount(){
    console.log('STARTING: setting app');
  }
  
  render(){
    return(
      <div 
       className="app-main">
        <div
         className={'app-navbar'}>
          <NavBar
           service={ this }
            />
        </div>
        <div
         className={'app-slide'}>
          {
            <Slider
            components={[ <Home/>, <About/>,  <StyledContact/>] }
            service = { this }
           />
          }
        </div>

      </div>
    )
  }
}

export default App;
