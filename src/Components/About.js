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

/* ~~~~~ */



function getSteps() {
  return ['Who i am', 'University', 'Internship', 'My Passions'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`;
    case 1:
      return 'An ad group contains one or more ads which target a shared set of keywords.';
    case 2:
      return `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`;
    default:
      return 'Unknown step';
  }
}

class VerticalLinearStepper extends Component {
  constructor(props){
    super(props);
    this.state={
      activeStep: 0,
    }
    this.contents = [
      `i am me `,
      `I study CS`,
      `I hate my internship`,
      `I love coding, math and physics`,
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
    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;

    return (
      <div 
       className={'about-stepper-root'}>

        <Stepper 
         activeStep={this.state.activeStep} 
         orientation="vertical">

          {
            steps.map(

              (label, index) => {

                return (
                  <Step 
                   key={label}>

                    <StepLabel>
                      {label}
                    </StepLabel>

                    <StepContent>

                      <Typography>
                        {
                          this.contents[this.state.activeStep]
                        }
                      </Typography>

                      <div className={'about-stepper-buttons'}>

                        <div>

                          <Button
                            disabled={this.state.activeStep === 0}
                            onClick={this.handleBack}
                            className={'about-back-button'}>

                              {
                                `Back`
                              }

                          </Button>

                          <Button
                            variant="contained"
                            color="primary"
                            onClick={this.handleNext}
                            className={'about-back-button'}>

                              {
                                activeStep === steps.length - 1 ? 'Finish' : 'Next'
                              }

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

        {this.state.activeStep === this.contents.length && (
          <Paper 
            square 
            elevation={0} 
            className={'about-paper-div'}>

              <Typography>
                {
                  `You finished my career resume`
                }
              </Typography>

              <Button 
               onClick={this.handleReset} 
               className={'about-reset-button'}>
                {
                  `Reset`
                }
              </Button>

          </Paper>
        )}
      </div>
    );
  }
}

class About extends Component{
  constructor(props){
      super(props);
  }
  render(){
      return(
          <div
           className={"about-main-div"}>

            <div
             className={"about-content-div"}>

              <h4
               className={'about-header'}>

               {`Hi, I am Rafael Santos`}

              </h4>

              <VerticalLinearStepper/>  
            </div>
            
          </div>
      );
  }
}

export default About;