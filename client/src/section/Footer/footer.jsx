import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FavoriteIcon from '@mui/icons-material/Favorite';
import "./footer.css"
const footer = () => {
  return (
    <>
    <div style={{display:"flex",marginTop:"90px",marginLeft:"380px"}}>

       <p style={{color:"gray"}}>
       Copyright ©2023 All rights reserved | This template is made with <FavoriteIcon /> by Colorlib </p> 
       <div style={{marginLeft:"280px"}}>

       <button className='btn5' style={{ marginLeft:"15px",border:"1px solid white",height:"40px",width:"40px"}}>
       <FacebookIcon/>
        </button> 
        <button className='btn5' style={{marginLeft:"15px",border:"1px solid white",height:"40px",width:"40px"}}>
        <TwitterIcon/>
        </button>
        <button className='btn5' style={{marginLeft:"15px",border:"1px solid white",height:"40px",width:"40px"}} >
        <SportsBasketballIcon/>
        </button>
      <button className='btn5' style={{marginLeft:"15px",border:"1px solid white",height:"40px",width:"40px"}}>
      <FormatBoldIcon/>
      </button>
    
    </div>
    </div>
    
    </>
  )
}

export default footer
