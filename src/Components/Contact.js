import  React, { Component } from 'react';
import './Contact.css';
import { TextField }  from '@material-ui/core';
import { withStyles } from '@material-ui/core';
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { Button, Icon } from '@material-ui/core';

const styles = {
    overrides:{
        MuiTextField:{
            root:{
                width: 20,
                color: 'red',
            },
            label:{
                width: 10,
                color: 'green',
            }
        },
        MuiButton:'contact-send-button'
    }
}

const theme = createMuiTheme(
    {
        palette: {
            primary: {
                dark: '#cacaca',
                main: '#cacaca',
            },
    
        }
    }   
);

class Contact extends Component{
    constructor(props){
        super(props);
        this.ids=[
            'name',
            'email',
            'phone',
            'info'
        ]
    }
    componentDidMount(){
        this.makeStyleColor();
    }
    makeStyleColor(){
        for(var id of this.ids){
            var elem = document.getElementById(id);
            if(elem !== null){
                elem.style.color = 'white';
            }
            
        }
        console.log("Color setted");
    }
    validateFields(){
        for(var id of this.ids){
            var elem = document.getElementById(id);
            if(elem.value === ''){
                console.log(`element with '${id}' id is empty.`);
            }
        }
    }
    render(){
        return(
            <div
             className={'contact-main-div'}>
            
                <div
                 className={'contact-content-div'}>

                    <div
                     className={'contact-form-div'}>

                        <MuiThemeProvider 
                         theme={theme}>
                            <div
                             className={'contact-field-div'}>
                                <TextField
                                    color="primary"
                                    id="name"
                                    label="Name"
                                    placeholder="Company or client name"
                                    className={this.props.classes.overrides.MuiTextField}
                                    margin="normal"
                                    variant="outlined"
                                    type="text"
                                    fullWidth={ true }
                                />
                            </div>
                            
                            <div
                             className={'contact-field-div'}>
                                <TextField
                                    className={this.props.classes.overrides.MuiTextField}
                                    color="primary"
                                    id="email"
                                    label="Email"
                                    placeholder="YourEmailAddress@emailhost.com"
                                    margin="normal"
                                    variant="outlined"
                                    type="email"
                                    fullWidth={ true }
                                />
                            </div>
                            
                            <div
                             className={'contact-field-div'}>
                                <TextField
                                    color="primary"
                                    id="phone"
                                    label="Phone Number"
                                    placeholder="(DDD) (XXXX-XXXX)"
                                    className={this.props.classes.overrides.MuiTextField}
                                    margin="normal"
                                    variant="outlined"
                                    type="tel"
                                    fullWidth={ true }
                                />
                            </div>
                            

                            <TextField
                                color="primary"
                                id="info"
                                label="About Project"
                                placeholder="Here you can tell me more about your projects..."
                                className={this.props.classes.overrides.MuiTextField}
                                margin="normal"
                                variant="outlined"
                                type="text"
                                multiline
                                rows={10}
                                fullWidth={ true }
                            />
                            <div
                             className={"contact-send-button"}>
                                <Button
                                  onClick={
                                      ()=>{
                                         this.validateFields();
                                      }
                                  }
                                  variant="contained" 
                                  color="primary">
                                    {
                                        `Send`
                                    }
                                    <Icon>send</Icon>
                                </Button>
                            </div>
                           

                        </MuiThemeProvider>

                    </div>

                </div>

            </div>
        )
    }
}
let StyledContact = withStyles(styles)(Contact);

export default StyledContact;