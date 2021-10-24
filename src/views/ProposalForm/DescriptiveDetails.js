import React, {useEffect, useContext, useState} from "react";
import {useDispatch, connect, useSelector} from "react-redux";
import axios from "axios";
import {useHistory} from "react-router-dom";
import {LOGIN_SUCCESS, LOGIN_FAIL, FORM_DATA} from "../../ReduxStore/Actions";
import {StudentDataContext} from "Context/StudentContext";
import {ProposalFormContext} from "Context/ProposalForm";
import {ToastContainer, toast} from "react-toastify";

import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
// import InitialForm from "./InitialForm";
// import GroupDetails from "./GroupDetails";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

import {makeStyles} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import "react-toastify/dist/ReactToastify.css";
import {blue} from "@material-ui/core/colors";


import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Box from '@material-ui/core/Box';

import Loader from "react-loader-spinner";

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

const DescriptiveDetails = ({id, isSUBMIT, isINVITE, isACCEPTED}) => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  const Contextvalue = useContext(ProposalFormContext);
  const { val , setval, handleChange   } = Contextvalue;
  console.log("VALUE FROM PROPOSAL FORM CONTEXT: ",val);

  return (
    <>  
      <br></br>
      <br></br>
        <Grid item xs={12}>
          <TextField
            required
            id="outline"
            name="outline"
            label="Brief Outline"
            fullWidth
            value={val.outline}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="objectives"
            name="objectives"
            label="Objectives"
            fullWidth
            value={val.objectives}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="scope"
            name="scope"
            label="Scope"
            fullWidth
            value={val.scope}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="methodology"
            name="methodology"
            label="Methodology"
            fullWidth
            value={val.methodology}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="exp_outcomes"
            name="exp_outcomes"
            label="Expected Outcomes of Proposed Project"
            fullWidth
            value={val.exp_outcomes}
            onChange={handleChange}
          />
        </Grid><Grid item xs={12}>
          <TextField
            required
            id="exp_budget"
            name="exp_budget"
            label="Expected Budget"
            fullWidth
            value={val.exp_budget}
            onChange={handleChange}
          />
        </Grid><Grid item xs={12}>
          <TextField
            required
            id="alignment"
            name="alignment"
            label="Alignment of project with departmental/programme mission and SDGs"
            fullWidth
            value={val.alignment}
            onChange={handleChange}
          />
        </Grid>
      <ToastContainer />
    </>
  );
};

function mapStateToProps({
  DataRed: {id, isSUBMIT, isINVITE, isACCEPTED},
}) {
  return {
    id: id, isSUBMIT: isSUBMIT, isINVITE: isINVITE, isACCEPTED: isACCEPTED,
  };
}
export default connect(mapStateToProps)(DescriptiveDetails);