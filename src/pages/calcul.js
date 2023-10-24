
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Tab from "@mui/material/Tab"
import { TextField ,InputAdornment, Typography, IconButton,ImageListItem, FormControlLabel, RadioGroup, Radio, Grid, useMediaQuery} from '@mui/material';

import Tabs from "@mui/material/Tabs"
import Box from "@mui/material/node/Box/Box";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Img  from '../image/height.png'
import Img1 from '../image/wghid.png'
import Img3 from "../image/age.png"
import Img4 from "../image/sex.png"

import styled from 'styled-components';
const Tab1 = styled(Tab)`
  margin: 0.3%;
  font-weight: bold;
`;



const Calcul = () => {
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  const [value, setValue] = React.useState('female');
  

  const handleChange = (event) => {
    setValue(event.target.value);
    console.log(value);
  };
  const [activeStep, setActiveStep] = useState(0);
  const [helptext, setHelptext] = useState("");
  const steps = ['Step 1', 'Step 2', 'Step 3', 'Step 4']; // Define your steps here
  

  const handleNext = () => {
    setHelptext("")
    
    setDF(tableData[activeStep])
    
    if (textFieldValue.length > 0 || tableData[activeStep]!=="" ) {
   setActiveStep((prevActiveStep) => prevActiveStep + 1);
   if (tableData[activeStep]==="" ) {
    tableData[activeStep] = textFieldValue;
    console.log(activeStep)
   }else{
    setDF(tableData[activeStep])
    console.log(textFieldValue)
    console.log(df ,"fffffffffffffffffff")


    if (textFieldValue ==="") {
     
      if (df !=="") {
 setTextFieldValue(tableData[activeStep]);
      }else{
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
        setHelptext("is empty")

      }
   
    }else{
      tableData[activeStep] = textFieldValue;

   
}
   }
    
    
  }else{
    setHelptext("is empty")
  }
  setTextFieldValue("");
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    
    
  };
  const [textFieldValue, setTextFieldValue] = useState(''); // Initialize the text field value state
  const [tableData] = useState(["","",""]); // Initialize the table data state as an array
  const [df, setDF] = useState(tableData[activeStep])

  const handleTextFieldChange = (event) => {
    setTextFieldValue(event.target.value); // Update the text field value state
    setDF(event.target.value); 
    setValue(event.target.value);
    console.log(value); 
  };


  console.log(tableData);
  const equoh =  66.5 + (13.75 * parseInt(tableData[1], 10)) + (5.003 * parseInt(tableData[0], 10)) - (6.75 *parseInt(tableData[2], 10))
  const equof = 655.1+ (9.563 * parseInt(tableData[1], 10)) + (1.850 * parseInt(tableData[0], 10)) - (4.676 *parseInt(tableData[2], 10))
  const equoh1 = equoh.toFixed(2); 
  return (
    
    <div style={{backgroundImage:isSmallScreen ? "": "linear-gradient(105deg, #E23722 35%, white 20px)", minHeight: "100vh", display: "flex", flexDirection: "column"  }}>
       
       
      <div style={{padding:"2%"}}>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height:100,margin:'0px 10%' ,width:"80%",backgroundColor: "#fafafa" , boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',borderRadius:10 ,position:"sticky",position:"-webkit-sticky",top:0 }}>
        <Box sx={{width:"30%",display: 'flex', justifyContent: 'center'}}>
        <Button disabled={activeStep === 0} onClick={handleBack} variant="contained" sx={{borderRadius:30 ,bgcolor:"#E23722",margin:"0 2%"}}>Back</Button>
        
        <Button variant="outlined"  href="/" sx={{borderRadius:30,margin:"0 2%"}}>Home page</Button>
        </Box>
    <Box sx={{ padding: ' ',width:"70%" ,display:isSmallScreen ? "none":"" }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab1 label="" href="/"  />
        <Tab1 label="" href="/" />
        <Tab1 label="" href="/"  />
        <Tab1 label="" href="/"  />
      </Tabs>
    </Box>
  </div>
  </div>
  <Grid container spacing={2}>
  <Grid item xs={12} md={3}>
      
        <Box sx={{display:"flex",alignContent:"center",alignItems:"center", flexDirection:"column" ,width:"100%"}}>
      {activeStep ===0 && (
        <Typography variant='h1'>Height</Typography>
       )}
       {activeStep ===1 && (
        <Typography variant='h1'>Weight</Typography>
       )}
       {activeStep ===2 && (
        <Typography variant='h1'>Age</Typography>
       )}
     
      
 
        
      </Box>
      </Grid>
      <Grid item xs={12} md={9}>
      





      {activeStep ===0 && (
        <Box sx={{display:"flex",alignContent:"center",alignItems:"center", flexDirection:"column" ,width:"100%"}}>
          <Box>
          <img src={Img} alt=""  style={{ minWidth:"100%", }} />





          </Box>


<Box sx={{marginBottom:"5%",}}>
          <TextField
       label=''
       defaultValue={tableData[activeStep]}
       
       
       onChange={handleTextFieldChange}
       helperText={helptext}
       
       
       InputProps={{
         
           style: {
             borderRadius: "30px",
             width:"100%",
             height:70,
             
             hoverBorder: {
               '&:hover': {
                 '& fieldset': {
                   borderColor: '#ff5722', // Change the border color on hover
                 },
               },
             },
           },
       
         endAdornment: (
           <InputAdornment position="end" >
             <IconButton variant="outlined" sx={{borderRadius:"50%" ,bgcolor:"#ff5722",margin:"0 2%" ,height:60}}disabled={activeStep === steps.length } onClick={handleNext}><ArrowForwardIcon  style={{ color: 'white','&:hover': { color: '#ff5722', }, }}/></IconButton>
           </InputAdornment>
         ),
       }}
     />
     </Box>
      </Box>
      )}








      {activeStep ===1 && (
         <Box sx={{display:"flex",alignContent:"center",alignItems:"center", flexDirection:"column"}}>
         <Box>
         <img src={Img1} alt="" style={{minWidth:"100%", }} />





         </Box>



         <Box sx={{marginBottom:"5%",}}>
          <TextField
       label=''
       defaultValue={tableData[activeStep]}
       
       
       onChange={handleTextFieldChange}
       helperText={helptext}
       
       
       InputProps={{
         
           style: {
             borderRadius: "30px",
             width:"100%",
             height:70,
             
             hoverBorder: {
               '&:hover': {
                 '& fieldset': {
                   borderColor: '#ff5722', // Change the border color on hover
                 },
               },
             },
           },
       
         endAdornment: (
           <InputAdornment position="end" >
             <IconButton variant="outlined" sx={{borderRadius:"50%" ,bgcolor:"#ff5722",margin:"0 2%" ,height:60}}disabled={activeStep === steps.length } onClick={handleNext}><ArrowForwardIcon  style={{ color: 'white','&:hover': { color: '#ff5722', }, }}/></IconButton>
           </InputAdornment>
         ),
       }}
     />
     </Box>
     </Box>
      )}







      {activeStep ===2 && (
         <Box sx={{display:"flex",alignContent:"center",alignItems:"center", flexDirection:"column"}}>
         <Box >
         <img src={Img3} alt="" style={{ width:"80%" }} />





         </Box>



         <Box sx={{marginBottom:"5%",}}>
          <TextField
       label=''
       defaultValue={tableData[activeStep]}
       
       
       onChange={handleTextFieldChange}
       helperText={helptext}
       
       
       InputProps={{
         
           style: {
             borderRadius: "30px",
             width:"100%",
             height:70,
             
             hoverBorder: {
               '&:hover': {
                 '& fieldset': {
                   borderColor: '#ff5722', // Change the border color on hover
                 },
               },
             },
           },
       
         endAdornment: (
           <InputAdornment position="end" >
             <IconButton variant="outlined" sx={{borderRadius:"50%" ,bgcolor:"#ff5722",margin:"0 2%" ,height:60}}disabled={activeStep === steps.length } onClick={handleNext}><ArrowForwardIcon  style={{ color: 'white','&:hover': { color: '#ff5722', }, }}/></IconButton>
           </InputAdornment>
         ),
       }}
     />
     </Box>
     </Box>
        
       
      )}








{activeStep ===3 && (
         <Box sx={{display:"flex",alignContent:"center",alignItems:"center", flexDirection:"column"}}>
         <Box sx={{maxWidth:"70%"}}>
         <img src={Img4} alt="" style={{ width:"132%" }} />





         </Box>



         <Box sx={{marginBottom:"5%",}}>
          
     <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleTextFieldChange}
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <IconButton variant="outlined" sx={{borderRadius:"50%" ,bgcolor:"#ff5722",margin:"0 2%" ,height:60}}disabled={activeStep === steps.length } onClick={handleNext}><ArrowForwardIcon  style={{ color: 'white','&:hover': { color: '#ff5722', }, }}/></IconButton>

      </RadioGroup>
     </Box>
     </Box>
        
       
      )}
      {activeStep ===4 && (
    <Box sx={{display:"flex",alignContent:"center",alignItems:"center", flexDirection:"column"}}>

          <Typography variant='h1'>BMR</Typography>
          <Typography variant='h3'> </Typography>
          { tableData[activeStep-1] ==="male" && (
            <Box sx={{display:"flex",alignContent:"center",alignItems:"center", flexDirection:"column"}}>

          <Typography variant='h1' >{(equoh*1.2).toFixed(2)} cal</Typography>
          <Typography variant='h3'sx={{margin:"2%"}}>{((equoh*0.45)/4).toFixed(2)} carbe</Typography>
          <Typography variant='h3'sx={{margin:"2%"}}>{((tableData[1]*0.75)*2.5).toFixed(2)} Protin</Typography>
          <Typography variant='h3'sx={{margin:"2%"}}>{(((equoh*1.2)-(equoh*0.45)-((tableData[1]*0.75)*10))/9).toFixed(2)} fat</Typography>

          </Box>
          )}
          { tableData[activeStep-1] ==="female" && (

<Typography variant='h1'>{equof *1.2} cal</Typography> 
)}
    
          
        



</Box>
        
      )}
        
        </Grid>
      </Grid>
      
    </div>
  );
};

export default Calcul;
