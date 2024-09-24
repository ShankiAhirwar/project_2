import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { ProductContext } from '../utils/Context';
import { nanoid } from 'nanoid';

function Edit() { 

 const navigate = useNavigate();

    const[products,setproducts] = useContext(ProductContext)
    const {id} = useParams()
    
    const [product,setproduct]   = useState({
        title:"",
        price:"",
        image:"",
        category:"",
        description:"",
    })

    const ChangeHandler = (e) =>{
        

        setproduct({...product,[e.target.name]:e.target.value})
    }

    useEffect(() => {
 setproduct(  products.filter((p) => p.id ==id)[0] )
    },[id])
    

    const AddProductHandler = (e) => {
        e.preventDefault();
            if(
                product.title.trim().length < 5 ||
                product.image.trim().length <5 ||
                product.category.trim().length <5 ||
                product.price.trim().length < 1 || 
                product.description.trim().length < 5
         ){
                alert("each and every filled must have at least 4 characters");
                return; 
            }

         
        const pi = products.findIndex((p) => p.id ==id)
        const copyData = [...products]
        copyData[pi] = {...product[id],...product}

      

        setproducts(copyData);
        localStorage.setItem("products",JSON.stringify(copyData)
          );
        navigate(-1)
        
    };

  return (
    <form onSubmit={AddProductHandler} className='p-[5%] w-screen h-screen flex flex-col items-center '>
    <h1 className='text-3xl mb-5 font-semibold'>Edit Product</h1>
    <input className='text-1xl bg-zinc-200 rounded p-2 w-1/2 mb-3' type="url" placeholder='Image url'
     name='image'
    onChange={ChangeHandler}
    value={product && product .image}
    
    />

     <input className='text-1xl bg-zinc-200 rounded p-2 w-1/2 mb-3' type="text" placeholder='title'

         name='title'
         onChange={ChangeHandler}
            value={product && product.title}

        />
       
       <div className='w-1/2 flex'>
       <input className='text-1xl bg-zinc-200 rounded p-2 w-[49%] mr-3  mb-3' type="text" placeholder='Category'

          name='category'
          onChange={ChangeHandler}
          value={product && product.category}

      />
    <input className='text-1xl bg-zinc-200 rounded p-2 w-[49%] mb-3' type="number" placeholder='Price'

         name='price'
         onChange={ChangeHandler}
       value={product && product.price}

/>
       </div>

       <textarea 
       className='text-1xl bg-zinc-200 rounded p-2 w-1/2 mb-3' placeholder='Enter product description here'
        rows="8"
        name='description'
        onChange={ChangeHandler}
        value={product && product.description}
       ></textarea>

    <button className='border-4 font-bold px-5 py-2 hover:text-blue-600 hover:bg-blue-100
rounded-md border-blue-300 text-blue-300'  > Edit  Product 

</button>

</form>
  )
}

export default Edit
