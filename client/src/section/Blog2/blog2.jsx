import React from 'react'
import "./blog2.css"
const blog2 = () => {
  return (
  <>
  
  <h1 style={{textAlign:"center",marginTop:"15%"}}>Latest News from our Blog</h1>
  <p style={{marginTop:"10px",textAlign:"center",color:"gray"}}>Who are in extremely love with eco friendly system.</p>
  <div style={{display:"flex",marginTop:"5%",gap:"20px",alignItems:"center",justifyContent:"center"}}>
  

<div >
    <img src="https://preview.colorlib.com/theme/immigration/img/b1.jpg" alt="" />
    <div className='buttons' style={{width:"180px",display:"flex",gap:"15px",marginTop:"15px"}}>
        <button className='btn4' style={{border:"1px solid #F6214B",width:"100px",height:"35px"}}>Travel</button>
        <button className='btn4' style={{border:"1px solid #F6214B",width:"100px"}} >Life style</button>
    </div>
    <div>
        <p style={{fontWeight:"bold",fontSize:"20px",marginTop:"15px"}}>Portable latest Fashion for young women</p>
    </div>
    <div>
       <p style={{color:"grey",marginTop:"15px"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod <br /> tempor incididunt ut labore et dolore.</p> 
    </div>
    <div>
        <p style={{color:"black",marginTop:"20px"}}>31st January, 2018</p>
    </div>
</div>
<div>

    <img src="https://preview.colorlib.com/theme/immigration/img/b2.jpg" alt="" />
    <div className='buttons' style={{width:"180px",display:"flex",gap:"15px",marginTop:"15px",height:"35px"}}>
        <button className='btn4' style={{border:"1px solid #F6214B",width:"100px"}}>Travel</button>
        <button className='btn4' style={{border:"1px solid #F6214B",width:"100px"}} >Life style</button>
    </div>
    <div>
        <p style={{fontWeight:"bold",fontSize:"20px",marginTop:"15px"}}>Portable latest Fashion for young women</p>
    </div>
    <div>
       <p style={{color:"grey",marginTop:"15px"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod <br /> tempor incididunt ut labore et dolore.</p> 
    </div>
    <div>
        <p style={{color:"black",marginTop:"20px"}}>31st January, 2018</p>
    </div>
</div>

  </div>
  </>
  )
}

export default blog2
