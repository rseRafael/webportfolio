import  React, { Component } from 'react';

class Service extends Component{ 
    constructor(props){
        super(props);
        this.state={
            activeIndex: null, 
            source: null,
            navbar: null, 
            slider: null, 
        }
    }
    componentDidUpdate(){
        console.log('service CHANGED');
        /*
        if(this.state.activeIndex !== null && this.state.source !== null){
            if(this.state.source === this.state.navbar){
                this.state.slider.setState({
                    index: this.state.activeIndex,
                    insideChange: false,
                })
            }
            else if(this.state.source === this.state.slider){
                this.state.navbar.setState({
                    activeIndex: this.state.activeIndex,
                    insideChange:false, 
                })
            }
        }
        */
    }
    render(){
        return(
            <div></div>
        )
    }
}
export default Service;