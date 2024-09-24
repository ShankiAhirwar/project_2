import React, { useContext } from 'react'
import { ProductContext } from '../utils/Context'
import { Link } from 'react-router-dom';

export default function Navbar() {
         
          const[products] = useContext(ProductContext)

          let  distinct_calegory=
           products && products.reduce((acc,cv)=>[...acc,cv.category], []);

           distinct_calegory = [...new Set(distinct_calegory)]
 
           
         
               
  return (
    <nav className='h-full w-[15%] bg-zinc-100 flex flex-col  items-center pt-5  '>
    <a className='border-2 font-semibold px-5 py-2 rounded-md border-blue-200 text-blue-400' href="/create"> Add New Product </a>
    <hr className='w-[80%] my-3' />
    <h1 className='text-xl font-semibold w-[80%]  mb-3'>Category Filter</h1>


    <div className=' w-[80%]'>

         {distinct_calegory.map((c,i)=>(
           <Link  key={i}
           to={`/?category=${c}`} className=' mb-3 flex items-center gap-2' >
           <span  className='block h-[15px] w-[15px] bg-red-400  rounded-full'>
          </span>{c}
      </Link>
     
         ))}
             

       
    </div>

  </nav>

  )
}
