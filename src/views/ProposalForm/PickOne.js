import React, {useEffect, useContext, useState} from "react";
import {useDispatch, connect, useSelector} from "react-redux";
import axios from "axios";
import {useHistory} from "react-router-dom";
import {LOGIN_SUCCESS, LOGIN_FAIL, FORM_DATA} from "../../ReduxStore/Actions";
import {ProposalFormContext} from "Context/ProposalForm";
import {ToastContainer, toast} from "react-toastify";
import Typography from "@material-ui/core/Typography";
// import InitialForm from "./InitialForm";
// import GroupDetails from "./GroupDetails";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

import {makeStyles} from "@material-ui/core/styles";
import "react-toastify/dist/ReactToastify.css";
import {blue} from "@material-ui/core/colors";

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

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

const PickOne = ({id, isSUBMIT, isINVITE, isACCEPTED, s_project_title}) => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  const value = useContext(ProposalFormContext);
  const { val , setval, handleChange, handleCategory ,handleCharacteristics } = value;
  console.log("VALUE FROM PROPOSAL FORM CONTEXT: ",val);

  return (
    <>
      <Typography component="h3" variant="h5" align="center">
        Proposed Title: {s_project_title}
      </Typography>
        
      <br></br>
      <FormControl component="fieldset" required>
        <Typography variant="subtitle1">
          1. How would you categorize this project?
        </Typography>
      <RadioGroup onChange={handleCategory} name="radio-buttons-group" >
        <FormControlLabel 
          value="An effort to facilitate an existing Research/ Industry Project" 
          name="first" 
          control={<Radio />}
          label="An effort to facilitate an existing Research/ Industry Project" 
        />
        <FormControlLabel 
          value="An effort to facilitate developing a Research/ Industry Funded Proposal for possible Funding" 
          name="second" 
          control={<Radio />} 
          label="An effort to facilitate developing a Research/ Industry Funded Proposal for possible Funding" 
        />
        <FormControlLabel 
          value="An effort to facilitate Master’s/ PhD project objectives" 
          name="third" 
          control={<Radio />} 
          label="An effort to facilitate Master’s/ PhD project objectives" 
        />
        <FormControlLabel 
          value="An exploratory study" 
          name="forth" 
          control={<Radio />} 
          label="An exploratory study" 
        />
        <FormControlLabel 
          value="An experimental study for better lab utilization/ development" 
          name="fifth" 
          control={<Radio />} 
          label="An experimental study for better lab utilization/ development" 
        />
        <FormControlLabel 
          value="A capstone project for students allowing them to apply their learning" 
          name="sixth" 
          control={<Radio />} 
          label="A capstone project for students allowing them to apply their learning" 
        />
        <FormControlLabel 
          value="Other(Fill the textbox below)" 
          name="seventh" 
          control={<Radio />} 
          label="Other(Fill the textbox below)"
        />
        <TextField
           id="reason"
           name="reason"
           label="Reason"
           fullWidth
           value={val.reason}
           onChange={handleChange}
         />
      </RadioGroup>
    </FormControl>
    <br></br>
    <br></br>

    <FormControl component="fieldset">
        <Typography variant="subtitle1">
          2. What characteristics of the Complex Engineering Problem (CEP) are applicable to this project? 
        </Typography>
      <RadioGroup onChange={handleCharacteristics} aria-label="" name="">
        <FormControlLabel 
          value="Range of conflicting requirements: technical, engineering or other issues" 
          control={<Radio />}
          label="Range of conflicting requirements: technical, engineering or other issues." 
        />
        <FormControlLabel 
          value="Depth of analysis required: have no obvious solution and require abstract thinking" 
          control={<Radio />} 
          label="Depth of analysis required: have no obvious solution and require abstract thinking" 
        />
        <FormControlLabel 
          value="Depth of knowledge required: require research-based knowledge" 
          control={<Radio />} 
          label="Depth of knowledge required: require research-based knowledge" 
        />
        <FormControlLabel 
          value="Familiarity of issues: Involve infrequently encountered issues" 
          control={<Radio />} 
          label="Familiarity of issues: Involve infrequently encountered issues" 
        />
        <FormControlLabel 
          value="Extent of applicable codes: standards and codes devised by the professional bodies" 
          control={<Radio />} 
          label="Extent of applicable codes: standards and codes devised by the professional bodies" 
        />
        <FormControlLabel 
          value="Extent of stakeholder involvement and level of conflicting requirements" 
          control={<Radio />} 
          label="Extent of stakeholder involvement and level of conflicting requirements" 
        />
        <FormControlLabel 
          value="Consequences: Impact over the society" 
          control={<Radio />} 
          label="Consequences: Impact over the society" 
        />
        <FormControlLabel 
          value="Interdependence: problems due to dependability" 
          control={<Radio />} 
          label="Interdependence: problems due to dependability" 
        />
        <FormControlLabel 
          value="Not Applicable" 
          control={<Radio />} 
          label="Not Applicable"
        />
      </RadioGroup>
    </FormControl>
      <ToastContainer />
    </>
  );
};

function mapStateToProps({
  DataRed: {id, isSUBMIT, isINVITE, isACCEPTED}, FormRed:{s_project_title}
}) {
  return {
    id: id,
    isSUBMIT: isSUBMIT,
    isINVITE: isINVITE,
    isACCEPTED: isACCEPTED,
    s_project_title: s_project_title
  };
}
export default connect(mapStateToProps)(PickOne);