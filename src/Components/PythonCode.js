import React, { Component } from 'react';
import './PythonCode.css';

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
    ]
export default class PythonCode extends Component{
    constructor(props){
        super(props);
        this.codeInterval = null;
        this.codeArr = [];
        this.state = {
            txtIndex: 0,
            listIndex: 0,
            code: [],
        }
    }
    componentDidMount(){
        this.codeIt();
    }
    componentWillUnmount(){
        
    }
    codeIt(){
        if (this.codeInterval == null){
            this.codeInterval = setInterval(
                ()=>{
                    if(this.state.listIndex < this.props.code.length){
                        let codeLine = this.props.code[this.state.listIndex];
                        let txt  = '';
                        if(this.state.txtIndex < codeLine.length){
                            if(this.state.txtIndex === 0){
                                this.codeArr.push('');
                            }
                            this.codeArr[this.state.listIndex] = this.codeArr[this.state.listIndex] + codeLine[this.state.txtIndex];
                            let newCode = [];
                            for( var txt of this.codeArr){
                                newCode.push(
                                    <p
                                     className={`pythoncode-code-line`}>
                                        {`${txt}`}
                                    </p>
                                );
                            }
                            this.setState({
                                txtIndex: this.state.txtIndex + 1,
                                code: newCode,
                            });
                        }
                        else{
                            this.setState({
                                txtIndex: 0,
                                listIndex: this.state.listIndex + 1,
                            }); 
                        }
                    }
                    else{
                        clearInterval(this.props.codeInterval);
                    }
                },
                30
            )
        }
    }
    render(){
        return(
            <div
             className={'pythoncode-main-div'}>
                <h4>
                    {'import myowntools'}
                </h4>
                <div
                 className={`pythoncode-code-div`}>
                {
                    this.state.code.map((v)=>v)
                }
                </div>
                
                
            </div>
        )
    }
}