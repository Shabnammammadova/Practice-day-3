// import React from 'react'
// import {RouterProvider,createBrowserRouter,createRoutesFromElements} from "react-router-dom"
// import Routes from "./Routes/router"

// const router=createBrowserRouter(createRoutesFromElements(Routes))
// const App = () => {
//   return (
// <>
// <RouterProvider routes={router}/>
// </>
//   )
// }

// export default App

import React from 'react'
import Navbar from "./section/Navbar/Navbar.jsx"
import Card from "./section/Card/card.jsx"
import Text from "./section/Text/text.jsx"
import Imigrant from "./section/Imigrant card/imigrant.jsx"
import Network from "./section/Network/network.jsx"
import Blog2 from "./section/Blog2/blog2.jsx"
import Footer from "./section/Footer/footer.jsx"


const App = () => {
  return (
   <>
   <Navbar/>
   <Card/>
   <Text/>
   <Imigrant/>
   <Network/>
   <Blog2/>
   <Footer/>
   </>
  )
}

export default App


