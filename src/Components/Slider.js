import React, { Component } from 'react';
import './Slider.css'


export default class Slider extends Component{
    constructor(props){
        super(props);
        this.state ={
            index: 0,
            insideChange: null,
        }
    }
    componentDidMount(){
        console.log("STARTING: setting service at slider ");
        /*
        this.props.service.setState({
            slider: this,
            setting: true, 
        })*/

    }
    componentDidUpdate(){
        console.log("slider updated");
        /*
        if(this.state.insideChange === true){
            if(this.props.service){
                this.props.service.setState({
                    activeIndex: this.state.index,
                    source: this,
                })
            }
        }*/
    }
    rightButton(){
        try{
            let service = this.props.service;
            if(service.state.activeIndex < 2 ){
                service.setState({
                    activeIndex: service.state.activeIndex + 1,
                })
            }
            /*
            if( this.state.index < this.props.components.length - 1){
                this.setState({
                    index: this.state.index + 1,
                })
            }
            if(this.props.service){
                this.props.service.setState({
                    activeIndex: this.state.index,
                    source: 'slider',
                })
            }*/
        }
        catch(Err){
            console.log("rigthButton error: ");
            console.log(Err);
        }
    }
    leftButton(){
        try{
            let service = this.props.service;
            if(service.state.activeIndex > 0 ){
                service.setState({
                    activeIndex: service.state.activeIndex - 1,
                })
            }
            /*
            if( this.state.index > 0 ){
                this.setState({
                    index: this.state.index - 1,
                });
            }
            if(this.props.service){
                this.props.service.setState({
                    activeIndex: this.state.index,
                    source: 'slider',
                })
            }*/
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
                    { this.props.components[this.props.service.state.activeIndex] }
                </div>
            </div>
        )
    }
}