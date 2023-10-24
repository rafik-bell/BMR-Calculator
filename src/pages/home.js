import React from 'react'
import { Box, Button, Typography, useMediaQuery } from '@mui/material'
import Imagehome from '../component/imagehome'
import style from "./home.module.css"
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import { Link } from 'react-router-dom';


export default function Home() {
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  return (
    <div style={{backgroundImage:isSmallScreen ?"": "linear-gradient(70deg, white 45%, #E23722  20px)" , minHeight: "100vh", display: "flex" ,zIndex:-5}}>
      <Box sx={{maxWidth:"100%",marginLeft:"2%",paddingTop:"60px",height:"100%"}}>
       <Typography variant='h3'sx={{}}>Welcome to the bikefitting.com</Typography>
       <Typography variant='h1'>Online Bike Sizer</Typography>
       <Typography variant='h6'>أهلا وسهلا بك في مختبر باور بوست لقياس الأداء الرياضي
نوفر لك هذه الخدمة لتحديد قياسك الأولي للدراجة الهوائية</Typography>
<Typography variant='h6'>يرجى العلم أن القياس الذي يظهر لك هو قياس أولي
لاتتردد في زيارة مختبرنا لتحديد القياسات بشكل أدق</Typography>


<Link to="/calcul"><Button sx={{backgroundColor:"#E23722",
   fontSize: isSmallScreen ? '0.8rem' : '1rem',
    fontWeight: 600,
    borderRadius: '35px',
    color: "white",
    margin:' 20px 0px',
    padding: '15px 10px',

    '&:hover': { // Apply styles on hover
      bgcolor: "#ff5722", // Change the background color on hover
    },}} ><FitnessCenterIcon sx={{width:"40px",height:"35px"}}></FitnessCenterIcon>Get started</Button></Link>
<Typography variant='h6'sx={{maxWidth:"130%"}}>The sole purpose of the Online Bike Sizer is to give you a suggestion for the optimal frame size and approximate saddle height, based on the type of bicycle and preferred riding style on the bicycle which is selected by you. When you have doubts about the input or the results or for a more in-depth fitting service please visit one of your local bikefitting.com dealers. You are solely responsible for the decision on whether to accept the indication presented by the Online Bike Sizer or not. For more information, please see our Terms & Conditions</Typography>

      </Box>
      <Box sx={{ display:isSmallScreen ?"none":"",minWidth:"40%",marginLeft:"26%",maxHeight:"100%"}}>
        <Imagehome></Imagehome>
   

      </Box>
      
    </div>
  )
}
