import React from 'react'
import "./text.css"
const text = () => {
  return (
   <>
   <div style={{display:"flex",gap:"20px",alignItems:"center",justifyContent:"center",marginTop:"60px"}}>
<div>
    <h2>Start planning your <br />
New Dream</h2>
</div>
<div>
    <p style={{color:"grey"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do <br /> eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut <br /> enim ad minim veniam, quis nostrud exercitation.</p>
</div>
<div>
    <button className='btn2' style={{width:"300px",height:"40px",backgroundColor:"#F6214B",marginLeft:"30px",color:"white"}}>Request Free Consultancy</button>
</div>

   </div>
   
   </>
  )
}

export default text
