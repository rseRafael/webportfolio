import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import SlideShow from 'react-slidez';
import NavBar from './Components/NavBar';
import PythonCode from './Components/PythonCode';


const myCode = 
    [
        '>>> from contacts import email', 
        '>>> yourName = input( " Hello, who are you ? " )', 
        '>>> client = new Client(yourName)', 
        '>>> question = input( " Can i help you with your project, {0} ? ".format(client.name) )', 
        ">>> if question == 'Yes':", ">>>     print( ' Great! ' )", 
        '>>>     information = input( " Tell me more about your projects: " )', 
        '>>>     print( " Now you should contact me " )', '>>>     emai.sendMe(information, client.email)', 
        ">>> elif question == 'No':", '>>>     print( " I\'m Sorry :[ " )', 
        '>>>     print("Please, save my contact in case you need it in the future.")', 
        '>>>     print(" Bye :] ")', '>>> else:', 
        '>>>     print("Continue looking my website.")', 
        '>>>     print("One of my skills bellow may interest you.")', 
    ];

class App extends Component{
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
          <NavBar/>
        </div>
        <div>
          <SlideShow
            height={'90%'}
            width={'100%'}
            showIndex={true}
            showArrows={true}
            effect={'top'}
            useDotIndex={true}
            autoplay={false}>
              <div
                className="app-slide-show">
                <div
                  style={{height: '100%', width: '100%', backgroundColor: 'purple',}}>
                </div>
              </div>
  
              <div
                className="app-slide-show">
                <Home/>
              </div>
              <div
               className="app-slide-show">
                <PythonCode code={myCode}/>
              </div>
          </SlideShow>
        </div>
        
  
      </div>
    )
  }
}

export default App;
