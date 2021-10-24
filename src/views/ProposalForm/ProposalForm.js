import React, {useEffect, useContext, useState, useRef} from "react";
import {useHistory} from "react-router-dom";
import {useDispatch, connect, useSelector} from "react-redux";
import {LOGIN_SUCCESS, LOGIN_FAIL, FORM_DATA, PROPOSAL_DATA} from "../../ReduxStore/Actions";
import {ToastContainer, toast} from "react-toastify";
import axios from "axios";
import Loader from "react-loader-spinner";
import { useReactToPrint } from 'react-to-print';
import {makeStyles} from "@material-ui/core/styles";
import "react-toastify/dist/ReactToastify.css";
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import CssBaseline from "@material-ui/core/CssBaseline";
import {blue} from "@material-ui/core/colors";
import CardFooter from "components/Card/CardFooter.js";
import {NavLink} from "react-router-dom";
import PrintIcon from '@material-ui/icons/Print';
import ComponentToPrint from './ComponentToPrint'
import PickOne from "./PickOne";
import DescriptiveDetails from "./DescriptiveDetails";
import AdvisorDetails from "./AdvisorDetails";

import {ProposalFormContext} from "Context/ProposalForm";
const blueColor = blue[500];

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 765,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  paper: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(0),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 10, 5),
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(1),
  },
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

//--------  STEPPER HEADERS   --------------
const steps = ["Pick One", "Descriptive Details", "Advisor Details"];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <PickOne />;
    case 1:
      return <DescriptiveDetails />;
    case 2:
      return <AdvisorDetails />;
    default:
      throw new Error("Unknown step");
  }
}

const ProposalForm = ({id, isSUBMIT, isINVITE, isACCEPTED, mem1,isPROPOSAL,category,
  reason,
  characteristics,
  outline,
  objectives,
  scope,
  methodology,
  exp_outcomes,
  exp_budget,
  gant_chart,
  alignment,
  RecommendationsandApproval,
  co_supervisor,s_project_title,
  s_internal,
  internal_designation
}) => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  const [activeStep, setActiveStep] = React.useState(0);
  const [ proposal , setProposal_submit ] = useState("");
  const [allocation_submitted,setAllocation_submit] = useState("")
  const value = useContext(ProposalFormContext);
  const { val ,setval } = value;
  const componentRef = useRef();

  //Calling Print Functional
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const authy = async () => {
    await axios
      .get("/student/about")
      .then((res) => {
        const {
          personid,
          name,
          isSUBMIT,
          isACCEPTED,
          isINVITE,
          email,
          contact,
          department, 
          isPROPOSAL,
          isPROPOSALSUBMIT
  

        } = res.data;
     
        dispatch({
          type: LOGIN_SUCCESS,
          payload: {
            auth: true,
            id: personid,
            name: name,
            isSUBMIT,
            isACCEPTED,
            isINVITE,
            email,
            department,
            contact,
            isPROPOSAL,
            isPROPOSALSUBMIT,
          },
        });
        setAllocation_submit(isPROPOSALSUBMIT);
        setProposal_submit(isPROPOSAL);
        console.log("Designation in Proposal",internal_designation)
      })
      .catch((err) => {
        dispatch({
          type: LOGIN_FAIL,
          payload: {
            auth: false,
            id: "",
            name: "",
            email: "",
            contact: "",
            department: "",
            isSUBMIT: false,
            isACCEPTED: false,
            isINVITE: false,
          },
        });
        history.push("/auth/login");
      });
  };

  useEffect(()=>{
    setval({rollNo: id});
      authy();
  },[]);
  
  // ------------Get Proposal data when isProposal =true
//  {console.log("proposalValue btao ::::::",isPROPOSAL)}
  if(isPROPOSAL){
     axios
      .get(`/student/getProposalData/${id}`)
      .then((res) => {
        console.log("-----ProposalData ", res.data);
        const { category,characteristics,outline,scope,methodology,exp_outcomes,exp_budget,alignment } =res.data
        dispatch({
          type: PROPOSAL_DATA,
          payload: {
            category: category,
            characteristics: characteristics,
            outline: outline,
            //objectives: objectives,
            scope: scope,
            methodology: methodology,
            exp_outcomes: exp_outcomes,
            exp_budget: exp_budget,
            // gant_chart: "",
            alignment: alignment,
           
          },
        });
         
        })
        .catch((err) => {
          console.log("Proposal Error",err);
        });
      }
    
    
  



  //**invoke notification if some field is missing */
  const notifyMISSINGDATA = () =>
    toast.info("Please fill all details of the form ", {
      position: "top-center",
      pauseOnHover: false,
    });

  const handleNext = () => {
    if (activeStep == 0) {
      if(val.category == null || val.characteristics == null){
        notifyMISSINGDATA(); 
      }
      else{
        setActiveStep(activeStep + 1);  
      }
    }
    else if (activeStep == 1) {
      if(val.outline == null || val.objectives == null || val.scope == null 
        || val.methodology == null || val.exp_outcomes == null || val.exp_budget== null
        || val.alignment == null){
          notifyMISSINGDATA();
        }
        else{
          setActiveStep(activeStep + 1);
        }
    } 
    else if (activeStep == 2) {
      if(val.RecommendationsandApproval == null){
        notifyMISSINGDATA();
      }
      else{
        setActiveStep(activeStep + 1);
        handlesubmit();
      }
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handlesubmit = async () => {
    console.log("FORM SUBMITTED");
    // setActiveStep(activeStep + 1);
    const {
      category,
      reason,
      characteristics,
      outline,
      objectives,
      scope,
      methodology,
      exp_outcomes,
      exp_budget,
      gant_chart,
      alignment,
      RecommendationsandApproval,
      co_supervisor
    } = val;

    {
      await axios
        .post("/student/proposalForm", val)
        .then((res) => {
          // console.log("Proposal Form res: ",res)
          const { category,reason,characteristics,outline,objectives,
            scope,methodology,exp_outcomes,exp_budget,alignment,
            RecommendationsandApproval, co_supervisor } = val;
         
          dispatch({
            type: PROPOSAL_DATA,
            payload: {
              category: category,
              reason: reason,
              characteristics: characteristics,
              outline: outline,
              objectives: objectives,
              scope: scope,
              methodology: methodology,
              exp_outcomes: exp_outcomes,
              exp_budget: exp_budget,
              gant_chart: "",
              alignment: alignment,
              RecommendationsandApproval: RecommendationsandApproval,
              co_supervisor: co_supervisor
            },
          });
          setActiveStep(activeStep + 1);
          
        })
        .catch((err) => {
          console.log(err.response);
        });
    } 

  };
  
  return (
    <>
      <CssBaseline />
      { console.log("PROPOSAL VALUE FROM BACKEND: ",category) }
      {/* FORM HEADER */}
      <main className={classes.layout}>
        <Paper className={classes.paper}>
    
          <Typography component="h3" variant="h4" align="center">
            Final Year Project Proposal Form
           
          </Typography>

          <Stepper className={classes.stepper} activeStep={activeStep}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
            {/* STEPPER INDIVIDUAL FORMS HEADER */}

            {/* WHEN REACHED LAST PAGE */}
          <React.Fragment>
            { proposal === true || (activeStep === steps.length) ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you for your response.
                </Typography>
                <Typography variant="subtitle1">
                  Your Response has been recorded. Check Portal for further details.
                </Typography>
                <CardFooter>
                    <NavLink to="../admin/dashboard">
                        <Button color="primary" variant="contained">
                            Back to Home
                        </Button>
              
                            </NavLink>
                            <div style={{display:'none'}}>
                              <ComponentToPrint 
                              category={category}
                              characteristics={characteristics}
                              outline={outline}
                              objectives={objectives}
                              scope={scope}
                              methodology={methodology}
                              exp_outcomes={exp_outcomes}
                              exp_budget={exp_budget}
                              alignment={alignment}
                              s_project_title={s_project_title} 
                              s_internal={s_internal}
                          
                              ref={componentRef} />
                              </div>
                            {/* <button onClick={handlePrint}>Print this out!</button> */}
                            
                              
                              <Grid container justify="flex-end" marginTop="3px">
                              <Button variant="outlined" startIcon={<PrintIcon />}  onClick={handlePrint}>
                
            
                                Print
                              </Button>
                    
                        </Grid>

                </CardFooter>
              </React.Fragment>
            ) : (
              <React.Fragment>
              {/* 
                Display Form if proposal value is true. 
                if false then dislay card that says "First submit the allocation form"
              */}
              {
                allocation_submitted === true ? (
                  <> 
                  {/* 
                    if he is leader: then show form.
                    Otherwise: dislay card that says "Form has to be submitted by the leader"
                  */}
                  {console.log("SeatNo. of Logged In: ",id)}
                  {console.log("SeatNo. of Leader: ",mem1)}
                  {
                    id == mem1   ? (
                      <>
                        {getStepContent(activeStep)}
                        <div className={classes.buttons}>
                          {activeStep !== 0 && (
                            <Button
                              onClick={handleBack}
                              className={classes.button}
                            >
                              Back
                            </Button>
                          )}
                          <Button
                            variant="contained"
                            color="primary"
                            onClick={handleNext}
                            className={classes.button}
                            //disabled={!bool}
                          >
                            {activeStep === steps.length - 1
                              ? "Submit Form"
                              : "Next"}
                          </Button>
                        </div>
                      </>
                    ) : (
                      <>
                        <React.Fragment>
                          <Typography variant="h5" gutterBottom>
                            Form Disabled!
                          </Typography>
                          <Typography variant="subtitle1">
                            Only the Group Leader can submit proposal form.
                          </Typography>
                          <Typography variant="subtitle1">
                            Thankyou.
                          </Typography>
                          <CardFooter>
                              <NavLink to="../admin/dashboard">
                                  <Button color="primary" variant="contained">
                                      Back to Home
                                  </Button>
                              </NavLink>
                             
                          </CardFooter>
                        </React.Fragment>
                      </>
                    )
                  }
                    
                  </>
                ) : (
                  <> 
                    <React.Fragment>
                      <Typography variant="h5" gutterBottom>
                        Form Disabled!
                      </Typography>
                      <Typography variant="subtitle1">
                        Please submit your FYP Allocation Form first, to enable this Form.
                      </Typography>
                      <Typography variant="subtitle1">
                        Thankyou.
                      </Typography>
                      <CardFooter>
                          <NavLink to="../admin/dashboard">
                              <Button color="primary" variant="contained">
                                  Back to Home
                              </Button>
                          </NavLink>
                      </CardFooter>
                    </React.Fragment>
                  </>
                )
              }
              </React.Fragment>
            )}
          </React.Fragment>

        </Paper>
        {/* <Copyright /> */}
      </main>
      <ToastContainer />
    </>
  );
};

function mapStateToProps({
  DataRed: {id, isSUBMIT, isINVITE, isACCEPTED,isPROPOSAL}, 
  FormRed: {mem1,s_project_title,s_internal,internal_designation}, 
  ProposalFormRed:{
  category,
  reason,
  characteristics,
  outline,
  objectives,
  scope,
  methodology,
  exp_outcomes,
  exp_budget,
  gant_chart,
  alignment,
  RecommendationsandApproval,
  co_supervisor,}
}) {
  return {
    id: id,
    isSUBMIT: isSUBMIT,
    isINVITE: isINVITE,
    isACCEPTED: isACCEPTED,
    mem1: mem1,
    isPROPOSAL:isPROPOSAL,
    category:category,
    reason,
    characteristics:characteristics,
    outline:outline,
    objectives:objectives,
    scope:scope,
    methodology:methodology,
    exp_outcomes:exp_outcomes,
    exp_budget:exp_budget,
    gant_chart,
    alignment,
    RecommendationsandApproval,
    co_supervisor:co_supervisor,
    s_project_title,
    s_internal,
    internal_designation
  };
}
export default connect(mapStateToProps)(ProposalForm);