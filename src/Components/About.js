import React, { Component } from 'react';
import './About.css';

/*Material-UI Componentes*/

import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
/* ~~~~~ */

/*
const myStyles = {
  stepper:{
    root:'about-stepper',
    vertical: 'about-stepper',
    alternativeLabel: 'about-stepper',
    horizontal: 'about-stepper',
  },
  stepLabel:{
    iconContainer: 'about-icon-container',
    label: 'about-label',
  },
  stepContent:{
    root:'about-step-content',
  }
};

const theme = createMuiTheme({
  palette:{
    stepperRoot:{
      background: 'red',
    },
    button:{
      background: 'green',
    }
  },
  typography:{
    stepper:{
      background: 'red',
    },
    button:{
      background: 'green',
    }
  }
})
*/

const styles = {
  root: {
    width: '100%',
    background: '#2f2f2f',
    color: 'white',
  },
  stepper:{
    width: '100%',
    background: '#2f2f2f',
  },
  stepLabel:{
    color: 'white',
  },
  typography:{
    color: '#cacaca',
  }

}

class VerticalLinearStepper extends Component {
  constructor(props){
    super(props);
    this.state={
      activeStep: 0,
    }
    this.steps = [
        [
          'About Me', 
          'I am a brazilian software developer who loves everything about computers ',
          <i className="fas fa-school about-steplabel-icon"></i>,
        ],
        [
          'University Experience',
          'I am currently persuing a degree in Computer Science at Federal Univesity of Rio de Janeiro ( said to be the best at CS in brazil)',
          <i className="fas fa-user-alt about-steplabel-icon"></i>
        ],
        [
          "Internship",
          "I spent 5 months working at a Software Company called GPE. It is based at the technological park and it's focused in AI things. ",
          <i className="fas fa-briefcase about-steplabel-icon"></i>
        ],
        [
          'Passions',
          'I love programming, mathematics and physics too. In my spare time i like to study other programming languages and to behave awkardly when talking to girls. ',
          <i className="far fa-grin-alt about-steplabel-icon"></i>,
        ]
    ]
  }
  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1,
    }));
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1,
    }));
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };

  render() {
    return(
        <div
         className={this.props.classes.root}>

        <Stepper
         className={this.props.classes.stepper}
         activeStep={this.state.activeStep} 
         orientation="vertical">

          {
            this.steps.map(

              (step, index) => {

                return (
                  <Step
                   key={step[0]}>

                    <StepLabel
                     className={this.props.classes.stepLabel}
                     icon={ step[2]}>
                      <p
                       className={`about-header-paragraph`}>
                        {
                          step[0]
                        }
                      </p>

                    </StepLabel>

                    <StepContent>

                      <Typography>
                        <p
                         className={`about-content-paragraph`}>
                          {
                            step[1]
                          }
                        </p>
                        
                      </Typography>

                      <div 
                       className={'about-stepper-buttons'}>

                        <div>

                          <Button
                           disabled={this.state.activeStep === 0}
                           onClick={this.handleBack}>
                            <p
                             className={'about-button-back'}>
                              {
                                `Back`
                              }

                            </p>
                             
                          </Button>

                          <Button
                            color="primary"
                            onClick={this.handleNext}>
                              <p
                               className={`about-button-next`}>
                                {
                                  this.state.activeStep === this.steps.length - 1 ? 'Finish' : 'Next'
                                }
                              </p>
                              
                          </Button>

                        </div>

                      </div>

                    </StepContent>

                  </Step>

                );
              }
            )
          }

        </Stepper>

        {
          this.state.activeStep === this.steps.length && 
          (
            <Paper 
             className={this.props.classes.root}
             square 
             elevation={0} >

                <Button
                 onClick={this.handleReset}>
                  <p
                   className={'about-button-next'}>
                    {
                      `Reset`
                    }
                  </p>
                  
                </Button>

            </Paper>
          )
        }
      </div>
    )
  }
}

let StyledStepper = withStyles(styles)(VerticalLinearStepper);


class About extends Component{
  render(){
      return(
          <div
           className={"about-main-div"}>

            <div
             className={"about-content-div"}>

              <h4
               className={'about-header'}>

                {
                  `Hi, I am Rafael Santos`
                }

              </h4>
              <StyledStepper/>
            </div>
            
          </div>
      );
  }
}

export default About;