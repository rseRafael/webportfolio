import React, { Component } from 'react';
import './Slider.css'


export default class Slider extends Component{
    constructor(props){
        super(props);
        this.state ={
            index: 0
        }
    }
    componentDidMount(){
        console.log(`this.props.children: ${this.props.children}`);
        console.log(`this.state.index: ${this.state.index}`);
        console.log(`this.props.componets: ${this.props.components}`);
    }
    /*
    componentWillUnmount(){

    }
    */
    rightButton(){
        try{
            if( this.state.index < this.props.components.length - 1){
                this.setState({
                    index: this.state.index + 1,
                })
            }
            console.log(this.state.index);
        }
        catch(Err){
            console.log("rigthButton error: ");
            console.log(Err);
        }

        
    }
    leftButton(){
        try{
            if( this.state.index > 0 ){
                this.setState({
                    index: this.state.index - 1,
                });
            }
            console.log(this.state.index);
        }
        catch(Err){
            console.log("leftButton Error: ");
            console.log(Err);
        }
        
    }
    render(){
        return(
            <div
             className={ "slider-main-div" }>
                <div
                 className={ "slider-left-button" }
                 onClick={ ()=>{ this.leftButton() } }>
                    <i 
                     className={ "fas fa-arrow-left slider-arrow-icon" }>
                    </i>
                </div>
                <div
                 className={"slider-right-button"}
                 onClick={ ()=>{ this.rightButton() } }>
                    <i 
                     className={ "fas fa-arrow-right slider-arrow-icon" }>
                    </i>
                </div>
                <div
                 className={ "slider-component-div" }>
                    { this.props.components[this.state.index] }
                </div>
            </div>
        )
    }
}