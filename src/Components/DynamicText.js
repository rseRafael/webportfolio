import React, { Component } from 'react';
import './DynamicText.css';

export default class DynamicText extends Component{
    constructor(props){
        super(props);
        this.state={
            text: '',
            interval: null, 
            index: 0,
        }
    }
    componentDidMount(){
        this.dynamicText();
    }
    componentWillUnmount(){
        this.setStart(
            {
                interval:clearInterval(this.state.interval),
            }
        )
    }
    dynamicText(){
        if(this.state.interval === null){
            this.setState({
                interval: setInterval(
                    ()=>{
                        var txt, 
                            index = this.state.index;
                        if(index > this.props.text.length - 1){
                            index = 0;
                            this.setState(
                                    {
                                        text: '',
                                    }
                                )
                        }
                        txt = this.state.text + this.props.text[index];
                        index+=1;
                        this.setState(
                            {
                                index: index,
                                text: txt,
                            }
                        );
                    },
                    150
                ) 
            });
        }
    }
    render(){
        return(
            <div
             className="dynamic-main">
                <p
                 className="dynamic-text">
                    {this.state.text}
                </p>
            </div>
        )
    }
}
