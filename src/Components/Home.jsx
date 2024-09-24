import React, { createContext, useContext, useState , useEffect } from 'react';
import Navbar from './Navbar';
import { Link, useLocation } from 'react-router-dom';
import {ProductContext} from '../utils/Context';
import Loading from './Loading';
import axios from '../utils/axios';

const Home = () => {

    
   const [products] = useContext(ProductContext)
   const {search} =useLocation();
   const category = decodeURIComponent(search.split("=")[1]);
       
   
     const [filteredProducts, setfilteredproducts] = useState(null);
   
   const getProductscategory = async ()=>{

       try{
          const {data} = await axios.get(`/products/category/${category}`);
          setfilteredproducts(data);
    }catch (error){
       console.log(error);
    }
   } 
         useEffect(()=>{
          if(!filteredProducts || category == "undefined") setfilteredproducts(products);
            if (category != "undefined"){
              
              // getProductscategory()
              setfilteredproducts(products.filter((p) => p.category == category));
            }
                },[category,products]); 
       
      
       
  
  return  products ? (
    <>    
     <Navbar/>

        <div className='w-[85%] h-full flex flex-wrap p-5 overflow-x-hidden overflow-y-auto'>

            {filteredProducts && filteredProducts.map((p,i)=>


            (<Link key={p.id}
                
                    to={`/details/${p.id}`}

             className='p-5 border shadow rounded mr-3 mt-[4%] w-[18%] h-[30vh] flex flex-col justify-center items-center  '>

                       <div className='hover:scale-110 w-full h-[80%] bg-contain bg-no-repeat bg-center' style={{backgroundImage: 
                      `url(${p.image})`
                        }} >
        
                      </div>
                      <h1 className='hover:text-blue-300 text-sm mt-2 font-semibold'> {p.title}</h1>
                </Link>
        
            ))}
 
  

        </div>
    </>
       ):( 
       <Loading/>
      );
}

export default Home
