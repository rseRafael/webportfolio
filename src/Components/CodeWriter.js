import React, { Component } from 'react';
import './CodeWriter.css';


export default class CodeWriter extends Component{
    constructor(props){
        super(props);
        this.codeInterval = null;
        this.state = {
            txtIndex: 0,
            listIndex: 0,
            code: '',
            codeFormatted: '',
            underLine: '_',
        }
    }
    componentDidMount(){
        console.log(this.props.code);
        this.codeIt();
        this.eba = setInterval(
            ()=>{
                if(!!this.state.underLine){
                    this.setState({
                        underLine: '',
                    });
                }
                else{
                    this.setState({
                        underLine: '  |',
                    });
                }
            },
            300
        );
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
                            let breakLine = '';
                            if (this.state.txtIndex === codeLine.length - 1 &&
                                this.state.listIndex < this.props.code.length - 1){
                                breakLine = '\n';
                            }
                            let newCode = this.state.code + codeLine[this.state.txtIndex] + breakLine;
                            let formatted = (
                                <pre
                                 className={'codewriter-code-txt'}>
                                    {
                                        `${newCode}`
                                    }
                                </pre>
                            );
                            let display = this.state.display             
                            this.setState({
                                txtIndex: this.state.txtIndex + 1,
                                code: newCode,
                                codeFormatted: formatted,
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
                10
            )
        }
    }
    render(){
        return(
            <div
             className={'codewriter-main-div'}>
                <h4>
                    {this.props.language}
                </h4>
                <div
                 className={`codewriter-code-div`}>
                    <div>
                        <pre
                            className={"codewriter-code-txt"}>
                            {
                                this.state.codeFormatted
                            }
                        </pre>
                        <pre
                         className={"codewriter-code-txt"}>
                            {
                                this.state.underLine
                            }
                        </pre>
                    </div>
                   
                    
                </div>
                
                
            </div>
        )
    }
}