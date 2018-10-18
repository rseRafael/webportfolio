import React, { Component } from 'react';
import './NavBar.css';

export default class NavBar extends Component{
    constructor(props){
        super(props);
        this.classes = {
            active: 'navbar-link active',
            inactive: 'navbar-link',
        }
        this.linksIndex={
            0: 'homeClass',
            1: 'aboutClass',
            2: 'blogClass',
            3: 'contactClass',
        }
        this.state={
            homeClass: 'navbar-link',
            aboutClass: 'navbar-link',
            blogClass: 'navbar-link',
            contactClass: 'navbar-link',
            activeIndex: null,
            insideChange: null,
        }
    }
    componentDidMount(){
        console.log("STARTING: setting service at navbar ");
        /*
        this.props.service.setState({
            navbar: this,
            setting: true,
        })*/
    }
    componentDidUpdate(){
        console.log('navbar updated');
        /*
        if( this.state.insideChange === true ){
            this.props.service.setState({
                activeIndex: this.state.activeIndex,
                source: this,
            });
        }
        */
    }
    changeActiveIndex(name){
        let index = null;
        switch(name){
            case 'home':
                index = 0;
                /*
                this.setState({
                    activeIndex: index,
                    homeClass: this.classes.active,
                    aboutClass: this.classes.inactive,
                    blogClass:this.classes.inactive,
                    contactClass:this.classes.inactive,
                    insideChange: true,
                });*/
                this.props.service.setState({
                    activeIndex: index
                })
                break;
            case 'about':
                index = 1;
                /*
                this.setState({
                    activeIndex: index,
                    homeClass: this.classes.inactive,
                    aboutClass: this.classes.active,
                    blogClass:this.classes.inactive,
                    contactClass:this.classes.inactive,
                    insideChange: true,
                });*/
                this.props.service.setState({
                    activeIndex: index,
                })
                break;
            case 'blog':
                index = 2;
                /*
                this.setState({
                    activeIndex: index,
                    homeClass: this.classes.inactive,
                    aboutClass: this.classes.inactive,
                    blogClass:this.classes.active,
                    contactClass:this.classes.inactive,
                    insideChange: true,
                });*/
                this.props.service.setState({
                    activeIndex: index,
                })
                break;
            case 'contact':
                index = 3;
                /*
                this.setState({
                    activeIndex: index,
                    homeClass: this.classes.inactive,
                    aboutClass: this.classes.inactive,
                    blogClass:this.classes.inactive,
                    contactClass:this.classes.active,
                    insideChange: true,
                });*/
                this.props.service.setState({
                    activeIndex: index,
                })
                break;
            default:
                break;
        }
    }
    render(){
        return(
            <div
             className={'navbar-main-div'}>
                <div
                 className={'navbar-logo-div'}>
                    <i className="fas fa-laptop-code navbar-icon"></i>
                </div>
                <div
                 className={"navbar-links-div"}> 
                    <div
                     className={"navbar-pair-container"}>
                        <p
                        onClick={
                            ()=>{
                                this.changeActiveIndex('home')
                            }
                        }
                        className={ this.state.homeClass }>
                            {`Home`}
                        </p>
                        <p
                        onClick={
                            ()=>{
                                this.changeActiveIndex('about')
                            }
                        }
                        className={ this.state.aboutClass }>
                            {`About`}
                        </p>
                    </div>
                    <div
                     className={"navbar-pair-container"}>
                        <p
                        onClick={
                            ()=>{
                                this.changeActiveIndex('blog')
                            }
                        }
                        className={ this.state.blogClass }>
                            {`Blog`}
                        </p>
                        <p
                        onClick={
                            ()=>{
                                this.changeActiveIndex('contact')
                            }
                        }
                        className={ this.state.contactClass }>
                            {`Contact`}
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}