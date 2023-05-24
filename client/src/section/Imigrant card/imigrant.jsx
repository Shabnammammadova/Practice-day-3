import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import "./imigrant.css"
const imigrant = () => {
  return (
   <>
    <h1 style={{textAlign:"center",marginTop:"80px"}}>Requirements to be Immigrants</h1>
    <h5 style={{color:"grey",textAlign:"center",marginTop:"20px"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt <br /> ut labore et dolore magna aliqua.</h5>
   <div style={{marginTop:"90px",display:"flex",gap:"10px",alignItems:"center",justifyContent:"center"}}>
 
   <Card className='card'  sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://preview.colorlib.com/theme/immigration/img/s1.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div" className='card1'>
        United States
        </Typography>
        <Typography variant="body2" color="text.secondary">
       <p style={{fontWeight:"bold",color:"black"}}> Addiction When Gambling <br /> Becomes A Problem</p> 
        <br />
        inappropriate behavior ipsum dolor sit amet, consectetur.
        </Typography>
      </CardContent>
      <CardActions>
     
     
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://preview.colorlib.com/theme/immigration/img/s2.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div" className='card1'>
        Canada
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <p style={{fontWeight:"bold",color:"black"}}> Addiction When Gambling <br /> Becomes A Problem</p> 
        <br />
        inappropriate behavior ipsum dolor sit amet, consectetur.
        </Typography>
      </CardContent>
      <CardActions>
  
     
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://preview.colorlib.com/theme/immigration/img/s3.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div" className='card1'>
        Germany
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <p style={{fontWeight:"bold",color:"black"}}> Addiction When Gambling <br /> Becomes A Problem</p> 
        <br />
        inappropriate behavior ipsum dolor sit amet, consectetur.
        </Typography>
      </CardContent>
      <CardActions>
    
     
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://preview.colorlib.com/theme/immigration/img/s4.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div" className='card1'>
        Australia
        </Typography>
        <Typography variant="body2" color="text.secondary" > 
        <p  style={{fontWeight:"bold",color:"black"}}> Addiction When Gambling <br/> Becomes A Problem</p> 
        <br />
        inappropriate behavior ipsum dolor sit amet, consectetur.
        </Typography>
      </CardContent>
      <CardActions>
  
     
      </CardActions>
    </Card>

   </div>
   
   </>
  )
}

export default imigrant
