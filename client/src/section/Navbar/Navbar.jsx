import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';


import "./navbar.css"

const Navbar = () => {
  return (
  <>
   <Box sx={{ flexGrow: 1 }}  >
      <AppBar position="fixed" style={{backgroundColor:"white"}}>
        <Toolbar>
        <div>
            <div style={{display:"flex",gap:"100px",textAlign:"center",marginTop:"20px"}}>
            <h4 style={{color:"black",fontSize:"15px",marginLeft:"450px"}} >We believe we helps people <br /> for happier lives  </h4> 

<img  src="https://preview.colorlib.com/theme/immigration/img/logo.png" alt="" />
<p style={{color:"black",marginLeft:"100px",marginTop:"10px"}}>+880 123 12 658 439</p><LocalPhoneIcon style={{border:"1px solid #F6214B",backgroundColor:"#F6214B",width:"40px",height:"40px"}}/>
            </div>
<hr style={{width:"400%"}} />
      <div style={{display:"flex",gap:"50px"}}>
        <ul style={{listStyleType:"none",color:"black",display:"flex",gap:"50px",marginTop:"45px",marginLeft:"500px"}}>
<li style={{color:"red"}}>Home</li>
<li>About</li>
<li>Immigration</li>
<li>Course</li>
<li>Country</li>
<li>Blog</li>
<li>Contact</li>
<li>Elements</li>
      </ul>

      </div>
    
      </div> 


      
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
         
          </Typography>
     
        </Toolbar>
      </AppBar>
    </Box>
  
  </>
  )
}

export default Navbar
