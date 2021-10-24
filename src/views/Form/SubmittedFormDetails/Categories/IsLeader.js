import React, { useRef, useContext } from 'react';
import ReactToPrint from 'react-to-print';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { teal } from '@material-ui/core/colors';
import { grey } from '@material-ui/core/colors';
import { useReactToPrint } from 'react-to-print';
import { connect } from 'react-redux';
const mainHeader = teal[200];
const subHeader = grey[300];
import Button from "@material-ui/core/Button";
//import Stack from '@material-ui/core/Stack';
import Header from "./Header";
import StudentDetails from "../Details/StudentsDetails";
import CompleteProjectDetails from "../Details/ProjectDetails/CompleteProjectDetails";
import ComponentToPrint from '../../ComponentToPrint';
import PrintIcon from '@material-ui/icons/Print';
import Grid from "@material-ui/core/Grid";
import {StudentDataContext} from "../../../../Context/StudentContext";
const useStyles = makeStyles({
  table: {
    minWidth: 700,
     
  },
  button: {
    display: "flex",
    justifyContent: "flex-end"
  }
});

function Main({id,s_project_title,s_internal,s_external,mem1,mem2,mem1_name,mem2_name,mem3_name,mem3}) {
  const classes = useStyles();
  const componentRef = useRef();
  const value = useContext(StudentDataContext); 
  console.log("Laeder mein  val:::",value)
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
      <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="spanning table">
        
        <Header />
        <StudentDetails />
        <CompleteProjectDetails /> 
        {/* <div>
      <ReactToPrint
        trigger={() => <button>Print this out!</button>}
        content={() => componentRef.current}
      />
      <div style={{display:'none'}} >
      <ComponentToPrint ref={componentRef} />
      </div>
    </div> */}
      
      </Table>
    </TableContainer>
  );
}
function mapStateToProps({DataRed: {id},FormRed:{mem1,mem2,mem1_name,mem2_name,mem3,mem3_name,s_project_title,s_internal,s_external}}) {
  return {
    id: id,
    s_project_title,s_internal,s_external,mem1,mem2,mem1_name,mem2_name,mem3,mem3_name,
    
  };
}
export default connect(mapStateToProps)(Main);