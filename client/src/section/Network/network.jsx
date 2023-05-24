import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import PersonIcon from '@mui/icons-material/Person';
import "./network.css"

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));



const network = () => {
  return (
    <>
    <div style={{textAlign:"center",colorL:"black",marginTop:"50px"}}>

<h1>Our Unique Features that can impress you</h1>
<h3 style={{color:"grey"}}>Who are in extremely love with eco friendly system.</h3>
    </div>
    <div style={{width:"800px",alignItems:"center",justifyContent:"center",marginLeft:"500px",marginTop:"50px",height:"70px"}}>

    <Box sx={{ flexGrow: 1 }} >
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}  >
        {Array.from(Array(6)).map((_, index) => (
          <Grid item xs={2} sm={4} md={4} key={index} >
            <Item>
               
         <button className='btn6'><p className='ptag' style={{textAlign:"justify",fontWeight:"bold",fontSize:"15px"}}>  <PersonIcon/>  Expert Technicians</p></button> 
            <p style={{textAlign:"justify"}}>Usage of the Internet is becoming more common due to rapid advancement of  technology and power.</p>
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
    </div>
    
    </>
  )
}

export default network
