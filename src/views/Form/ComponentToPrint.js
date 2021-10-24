import React, { Component } from 'react';
import { connect } from 'react-redux';
import { idText } from 'typescript';

import nedlogo from './nedlogo.png'
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
    root:{
        marginLeft:"30px",
        padding:"10px"
        
    },
    
    typography: {
        flexGrow: 1,
        alignItems: 'center',
      
        textAlign:"center"
    },
    text: {
        fontSize:"20px"
    },
    subheading: {
        fontWeight:"bold"
    },
    para: {
        display: 'inline'
       
    }
  });
class ComponentToPrint  extends Component {
    
    render() {
        
        const { classes } = this.props;
        const {id,s_external,s_project_title,s_internal,mem1,mem2,mem1_name,mem2_name,mem3_name,mem3,internal_designation,external_designation} = this.props;
        let outline = {
            marginTop: '10px',
            marginLeft: '15px',
          };

        let heading = {
            
            fontSize:'40px',
            textAlign: "center",
        }
        let img = {
            display: 'block',
            textAlign: "center",
            marginLeft:"350px",
            marginRight:"1000px",
            alignSelf: 'center'
        }

        let table = {
            border: "2px solid black",
            width: "70%",
            marginTop:"5px",
            marginLeft:"10px"
        }
        const current = new Date();
        const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
        return (
            <div>
                 <div style={outline} className={classes.root} >
                 <img src={nedlogo} style={img}width="80px" height="60px" className='justify-content-center' alt=""/> <br></br>
                 <Typography variant="h5" component="div" gutterBottom className={classes.typography} >
                 NED University of Engineering and Technology
                </Typography> 
                 {/* <h1 style={heading}>NED University of Engineering and Technology</h1>      */}
                {/* <h4 style={heading}>FYPD Allocation Form:</h4> */}
                <Typography variant="h6" component="div" gutterBottom className={classes.typography} >
                        FYPD Allocation Form
                </Typography>
                <Typography variant="h6" component="div" gutterBottom className={classes.typography} >
                        Department of Computer Science and Information Technology
                </Typography>
                <Typography variant="h6" component="div" gutterBottom className={classes.typography} >
                        Date: {date}
                </Typography>  <br/> <br/>
                <Typography variant="body1" gutterBottom className={classes.text}>
                Project Title : {s_project_title}
                </Typography>
               
                <Typography variant="body1" gutterBottom className={classes.text}>
                    Supervisor : {s_internal}
                </Typography>
                <Typography variant="body1" gutterBottom className={classes.text}>
                    Designation : {internal_designation}
                </Typography>
                <Typography variant="body1" gutterBottom className={classes.text}>
                    Co-Supervisor : {s_external}
                </Typography>
                <Typography variant="body1" gutterBottom className={classes.text}>
                    Designation : {external_designation}
                </Typography>
                    <br/>
                <Typography variant="h5" component="div" gutterBottom className={classes.subheading} >
                    Group Members
                </Typography> 
              
                <table style={table}>
                    <tr style={table} >
                        <th style={table}>Name</th>
                        <th style={table}>Seat No:</th>
                        <th style={table}>Signature</th>
                    </tr>
                    <tr style={table}>
                        <td style={table} >{mem1_name}</td >
                        <td style={table}>{mem1}</td>
                        <td style={table}>________</td>
                    </tr>
                    <tr style={table}>
                        <td style={table}>{mem2_name}</td>
                        <td style={table}>{mem2}</td>
                        <td style={table} >________</td>
                    </tr>
                    <tr style={table}>
                        <td style={table}>{mem3_name}</td>
                        <td style={table}>{mem3}</td>
                        <td style={table} >________</td>
                    </tr>
                    </table>
                    <br /> <br /> 

                <p className={classes.para}>_______________ </p>
                <p>Signature Supervisor</p>
                 <br/>
                <p className={classes.para}>_______________</p>
                <p >Signature <br/> Industrial Advisor</p>

                <table style={table}>
                    <tr style={table} >
                        <th style={table} colSpan={2} >For Office Use Only</th>
                    
                    </tr>
                    <tr style={table}>
                        <td style={table} >Poject Serial No: </td >
                        
                        <td style={table}>________________   <br/> Signature of FYPD Coordinator</td>
            
                    </tr>
                    <tr style={table}>
                    <td style={table}>Dated: {date}</td>
                     
                    </tr>
                   
                    </table>
               
 
               
               {/* <h2>Allocation form</h2>
               <h3>MSG : {this.props.msg}</h3> */}
            </div>
            </div>
           
        );
    }
}
// const mapStateToProps = (state) => ({
//       id:state.DataRed.id,
      
//     //console.log("ID CLASS REDUX ****",id)
// })
// export default connect(mapStateToProps)(ComponentToPrint) ; 
export default withStyles(styles)(ComponentToPrint);
//export default ComponentToPrint ; 