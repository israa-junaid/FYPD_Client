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
        fontSize:"20px",
        fontWeight:"bold"
    },
    subheading: {
        fontWeight:"bold"
    },
    para: {
        display: 'inline'
       
    },
    text2: {
        fontSize:"20px",
       
    },
    text3: {
        fontSize:"16px",
        textDecorationLine: 'underline',
        fontWeight:"bold"
    },
     body: {
        fontSize:"18px",
        
    },
  });
class ComponentToPrint  extends Component {
    
    render() {
        
        const { classes } = this.props;
        const {category,
            reason,
            characteristics,
            outline,
            objectives,
            scope,
            methodology,
            exp_outcomes,
            exp_budget,
            gant_chart,
            alignment,s_project_title,s_internal} = this.props;
            


        let outlines = {
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
                 <div style={outlines} className={classes.root} >
                 <img src={nedlogo} style={img}width="80px" height="60px" className='justify-content-center' alt=""/> <br></br>
                 <Typography variant="h5" component="div" gutterBottom className={classes.typography} >
                   NED University of Engineering and Technology
                </Typography> 
                 {/* <h1 style={heading}>NED University of Engineering and Technology</h1>      */}
                {/* <h4 style={heading}>FYPD Allocation Form:</h4> */}
                <Typography variant="h6" component="div" gutterBottom className={classes.typography} >
                        Proposal for FYPD
                </Typography>
                <Typography variant="h6" component="div" gutterBottom className={classes.typography} >
                        Department of Computer Science and Information Technology
                </Typography>
                {/* <Typography variant="h6" component="div" gutterBottom className={classes.typography} >
                        Date: {date}
                </Typography>  <br/> <br/> */}
                 <Typography variant="body1" gutterBottom className={classes.text}>
                   Proposed Title : {s_project_title}
                </Typography>
                <Typography variant="body1" gutterBottom className={classes.text}>
                     How would you categorize this project? 
                </Typography>
                <Typography variant="body1" gutterBottom className={classes.body}>
                            {category}
                </Typography>
                <Typography variant="body1" gutterBottom className={classes.text}>
                        What characteristics of the Complex Engineering Problem (CEP) are applicable to this project ? 
                </Typography>
                <Typography variant="body1" gutterBottom className={classes.body}>
                              {characteristics}
                </Typography>
                <Typography variant="body1" gutterBottom className={classes.text}>
                        Brief Outline :
                </Typography>
                <Typography variant="body1" gutterBottom className={classes.body}>
                            {outline}
                </Typography>
                
                {/* <Typography variant="body1" gutterBottom className={classes.text}>
                        Objectives :
                </Typography>
                <Typography variant="body1" gutterBottom className={classes.body}>
                            {objectives}
                </Typography> */}
                <Typography variant="body1" gutterBottom className={classes.text}>
                Scope :
                </Typography>
                <Typography variant="body1" gutterBottom className={classes.body}>
                            {scope}
                </Typography>
                <Typography variant="body1" gutterBottom className={classes.text}>
                        Methodology :         
                </Typography> 
                <Typography variant="body1" gutterBottom className={classes.body}>
                            {methodology}
                </Typography>
                <Typography variant="body1" gutterBottom className={classes.text}>
                Expected Outcomes of the proposed project :
                </Typography>
                <Typography variant="body1" gutterBottom className={classes.body}>
                            {exp_outcomes}
                </Typography>
                <Typography variant="body1" gutterBottom className={classes.text}>
                Expected Budget :
                </Typography>
                <Typography variant="body1" gutterBottom className={classes.body}>
                            {exp_budget}
                </Typography>
                <Typography variant="body1" gutterBottom className={classes.text}>
                Alignment of project with departmental/programme mission and SDGs.     
                </Typography>
                

                
                
                
                
                
                <br/><br/>
                <Typography variant="body1" gutterBottom className={classes.text2}>
                  Name of Supervisor: {s_internal}             <br/><br/><br/> Signature: _____________________
                </Typography>
                <Typography variant="body1" gutterBottom className={classes.text2}>
                  Name of Co-Supervisor(if any):                  <br/><br/><br/> Signature: _____________________
                </Typography>
                <Typography variant="body1" gutterBottom className={classes.text2}>
                  Name of Industrial Advisor(if any):       <br/>           
                </Typography>
                <Typography variant="body1" gutterBottom className={classes.text3}>
                        Recommendations and Approval:      <br/><br/>               
                </Typography>
                <Typography variant="body1" gutterBottom className={classes.text3}>
                        Chairperson (Head of FYDP Review Committee) Sign with Date:                  
                </Typography>


               
 
               
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