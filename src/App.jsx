import React from 'react'
import Home from './Components/Home'
import { Routes,Route, Link, useLocation } from 'react-router-dom'
import Details from './Components/Details'
import Create from './Components/Create';
import Edit from './Components/Edit';
function App() {

    const {search,pathname} = useLocation();
    
  return (
    <div className='h-screen w-full  flex'>
         
         {(pathname  !="/" || search.lenght > 1) && (
            <Link 
              to="/" 
              className=" text-red-300 absolute left-[16%] top-[3%] ">
              
              Home
         
            </Link>

         )}
        
 
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create' element={<Create />} />
        <Route path='/details/:id' element={<Details />} />
        <Route path='/edit/:id' element={<Edit />} />
      </Routes>
      
    </div>
  )
}

export default App
