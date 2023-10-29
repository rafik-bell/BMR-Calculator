import React from 'react'
import { Box, Button, Grid, Typography, useMediaQuery } from '@mui/material'
import Imagehome from '../component/imagehome'
import style from "./home.module.css"
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import { Link } from 'react-router-dom';
import Image from 'mui-image';
import Img from "../image/homeimg.png"


export default function Home() {
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  const isMediumScreen = useMediaQuery('(max-width:1200px)');
  return (
    
    <div style={{backgroundImage:isSmallScreen ?"": "linear-gradient(70deg, white 45%, #E23722  20px)" , minHeight: "100vh", display: "flex" ,zIndex:-2}}>
    <Grid container spacing={2}>
  <Grid item lg={5}xs={12}>
    

      <Box sx={{maxWidth:"100%",marginLeft:"2%",paddingTop:"60px",maxHeight:"100%",overflow:"hidden"}}>
     
       <Typography variant='h3'sx={{
      fontSize: isSmallScreen ? '1.5rem' : isMediumScreen ? '2rem' : '3rem',color:isSmallScreen? "lightgray":""
    }}>Welcome to </Typography>
       <Typography fontFamily={"revert"} variant='h1'sx={{fontSize:isSmallScreen? "2.4rem":"4rem",color:isSmallScreen? "#E23722":""}}>Online BMR Calculator</Typography>
       <Typography variant='h6'>    من خلال حاسبة حرق السعرات الحرارية، تستطيع معرفة عدد السعرات الذي تناولته خلال اليوم ضمن نظامك الغذائي، ادخل معطياتك واكتشف الان.   </Typography>
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
<Typography variant='h6'sx={{maxWidth:"130%"}}>The Basal Metabolic Rate (BMR) Calculator estimates your basal metabolic rate—the amount of energy expended while at rest in a neutrally temperate environment, and in a post-absorptive state (meaning that the digestive system is inactive, which requires about 12 hours of fasting).</Typography>

      </Box>
      </Grid>
      <Grid item lg={7} xs={0}>
      <Box sx={{ display:isSmallScreen ?"none": isMediumScreen?"none":"",minWidth:"40%",marginLeft:"26%",minHeight:"100%"}}>
        <Imagehome></Imagehome>
   

      </Box>
      </Grid>
      </Grid>
      
    </div>
   
   
  )
}
