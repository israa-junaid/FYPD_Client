import React, {useEffect, useContext, useState} from "react";
import {useDispatch, connect, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import {LOGIN_SUCCESS, LOGIN_FAIL, FORM_DATA} from "../../ReduxStore/Actions";
import {StudentDataContext} from "Context/StudentContext";
import {ProposalFormContext} from "Context/ProposalForm";
import {ToastContainer, toast} from "react-toastify";
import {makeStyles} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import {blue} from "@material-ui/core/colors";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";

import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
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

const AdvisorDetails = ({id, isSUBMIT, isINVITE, isACCEPTED, s_internal, s_external }) => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const Contextvalue = useContext(ProposalFormContext);
  const { val , setval, handleChange  } = Contextvalue;

  // console.log("CATEGORY FROM REDUX",category)
  return (
    <>
      <Grid container spacing={3}>
            <Grid item xs={10} sm={5}>
                <TextField
                    required
                    id="s_internal"
                    name="s_internal"
                    label="Name of Supervisor:"
                    value={s_internal}
                    readonly
                    fullWidth
                    autoComplete="given-name"
                />
            </Grid> 
            <Grid item xs={10} sm={5}>
              <TextField
                required
                id="co_supervisor"
                name="co_supervisor"
                label="Name of Co-Supervisor (if any):"
                value={val.co_supervisor}
                fullWidth
                autoComplete="given-name"
              />
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={10} sm={5}>
              <TextField
                required
                id="s_external"
                name="s_external"
                label="Name of Industrial Advisor (if any):"
                value={s_external}
                fullWidth
                autoComplete="given-name"
              />
            </Grid>
          </Grid>
          {/* <Grid item xs={12}>
          <TextField
            required
            id="RecommendationsandApproval"
            name="RecommendationsandApproval"
            label="Recommendations and Approval"
            fullWidth
            value={val.RecommendationsandApproval}
            onChange={handleChange}
            //autoComplete="shipping address-line1"
          />
        </Grid> */}
        <br></br>
       
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        {/* <Typography variant="h6">
            Signature of Supervisor
        </Typography>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Typography variant="h6">
            Signature of Co-Supervisor
        </Typography>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br> */}
      <ToastContainer />
    </>
  );
};

function mapStateToProps({
  DataRed: {id, isSUBMIT, isINVITE, isACCEPTED}, FormRed:{s_internal, s_external},

}) {
  return {
    id: id,
    isSUBMIT: isSUBMIT,
    isINVITE: isINVITE,
    isACCEPTED: isACCEPTED,
    s_internal: s_internal,
    s_external: s_external,
  };
}
export default connect(mapStateToProps)(AdvisorDetails);