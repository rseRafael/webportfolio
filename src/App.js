import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import CodeWriter from './Components/CodeWriter';
import Slider from './Components/Slider';
import myCode from './Utils/Codes';

const slider = (
      <Slider
           components={[ <Home/>, <CodeWriter code={myCode}/>] }
          />
)
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      mySlider: slider,
    }
  }
  componentDidMount(){
    /*
    for (var prop in MySlider){
      var type = typeof MySlider[prop];

      console.log(type, prop, MySlider[prop]);
    }
    */
  }
  
  render(){
    return(
      <div 
       className="app-main">
        <div
         className={'app-navbar'}>
          <NavBar
            />
        </div>
        <div
         className={'app-slide'}>
          {
            this.state.mySlider
          }
        </div>
        
      </div>
    )
  }
}

export default App;
