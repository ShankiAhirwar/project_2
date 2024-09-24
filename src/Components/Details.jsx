//  import axios from '../utils/axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Loading from './Loading'
import { ProductContext } from '../utils/Context'

function Details() {

  const navigate = useNavigate();

  const[products,setproducts] = useContext(ProductContext)
  // console.log(products)
  const[product,setproduct] = useState(null)

    const{id} = useParams()

      //  const getsingleproduct =async ()=>{
        // try{
          // const{data } = await axios.get(`/products/${id}`);
        //  setproduct(data);
    //  }catch(error){
        //  console.log(error)
      // }
      //  }
   
     useEffect(()=> {
      if(!product ) {
        setproduct( products && products.filter((p)=>p.id == id)[0]);
      }
     },[]);

     const ProductDeleteHandler = (id) => {
       const Filteredproducts = products.filter((p)=>p.id !== id);
       setproducts(Filteredproducts);
       localStorage.setItem('products',JSON.stringify( Filteredproducts));
       navigate('/');
     };

  return product ? (
    <div className='w-[80%] h-full  m-auto p-[10%] items-center   flex itmes-center '>
      <img className=' object-contain w-[50%] h-[90%]'
      src= {`${product.image}`} alt="" />

      <div className='contant  w-[50%] '>
        <h1 className='text-3xl font-semibold'>{product.title}</h1>
        <h3 className='font-semibold text-zinc-400 my-3'>{product.category}</h3>
        <h2 className='font-bold mb-4 text-green-500'> { product.price}</h2>
        
        <p className='mb-5 text-sm font-semibold'>{product.description}</p>
        <Link to={`/edit/${product.id}`} className='border-2 mr-3 font-semibold px-5 py-1 rounded-md border-blue-200 text-blue-400'>Edit</Link>
         <button onClick={() => ProductDeleteHandler(product.id)} className='border-2 font-semibold px-5 py-1 rounded-md border-red-200 text-red-400'>Delete</button>
      
      </div>
    </div>
  ):(<Loading />

  )
}

export default Details
