import Tab from "@mui/material/Tab"
import React from "react";
import Tabs from "@mui/material/Tabs"
import Box from "@mui/material/node/Box/Box";
import { Button } from "@mui/material";
import styled from 'styled-components';

const Tab1 = styled(Tab)`
  margin: 0.3%;
  font-weight: bold;
`;


export default function Navbar() {
    const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(value);
  };
  return (
   <div style={{padding:40}}>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height:100,margin:'0px 10%' ,width:"80%",backgroundColor: "#fafafa" , boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',borderRadius:10 }}>
        <Box sx={{width:"30%",display: 'flex', justifyContent: 'center'}}>
        <Button variant="contained" sx={{borderRadius:30 ,bgcolor:"#ff5722",margin:"0 2%"}}>Contained</Button>
        <Button variant="outlined" sx={{borderRadius:30,margin:"0 2%"}}>Primary</Button>
        </Box>
    <Box sx={{ padding: ' ',width:"70%" }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab1 label="Home" href="" value="555" />
        <Tab1 label="About" href="" />
        <Tab1 label="Projects" href=""  />
        <Tab1 label="Contact" href=""  />
      </Tabs>
    </Box>
  </div>
  </div>
  )
}