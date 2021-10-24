import React, { useRef, useContext } from 'react';
import ComponentToPrint from './ComponentToPrint';
import PrintIcon from '@material-ui/icons/Print';
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useReactToPrint } from 'react-to-print';
import { connect } from 'react-redux';



function AllocationDone({id,s_project_title,s_internal,s_external,mem1,mem2,mem1_name,mem2_name,mem3_name,mem3,internal_designation,
    external_designation}) {
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
      });
    return (
        <div>
             <Typography variant="h5" gutterBottom>
            Your Response has been Recorded Successfully.
            </Typography>
            <Typography variant="subtitle1">
                Keep checking portal for further details.
            </Typography>
            <div style={{display:'none'}}>
              <ComponentToPrint id={id}  s_project_title={s_project_title} s_external={s_external}  s_internal={s_internal} 
                mem1={mem1} mem2={mem2} mem1_name={mem1_name} mem2_name={mem2_name} mem3_name={mem3_name} mem3={mem3} internal_designation={internal_designation}
                external_designation = {external_designation}
              ref={componentRef} />
              </div>
            {/* <button onClick={handlePrint}>Print this out!</button> */}
     
              <Grid container justify="flex-end" marginTop="3px">
              <Button variant="outlined" startIcon={<PrintIcon />}  onClick={handlePrint}>
                Print
              </Button>
              </Grid>
              {console.log("Designation:",external_designation)}
            
        </div>
    );
}


function mapStateToProps({DataRed: {id},FormRed:{mem1,mem2,mem1_name,mem2_name,mem3,mem3_name,s_project_title,s_internal,s_external},FormRed:{internal_designation,
    external_designation}}) {
    return {
      id: id,
      s_project_title,s_internal,s_external,mem1,mem2,mem1_name,mem2_name,mem3,mem3_name,
      internal_designation,
              external_designation
      
    };
  }
  export default connect(mapStateToProps)(AllocationDone);