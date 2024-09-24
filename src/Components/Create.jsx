import React, { useContext, useState } from 'react'
import { ProductContext } from '../utils/Context'
import { nanoid } from 'nanoid'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

function Create() {
    const navigate = useNavigate();

    const[products,setproducts] = useContext(ProductContext)

    const [image, setimage] = useState('')
    const [title, settitle] = useState('')
    const [category, setcategory] = useState('')
    const [price, setprice] = useState('')
    const [description, setdescription] = useState('')

    const AddProductHandler = (e) => {
        e.preventDefault();
            if(title.trim().length < 5 ||
              image.trim().length <5 ||
              category.trim().length <5 ||
              price.trim().length < 1 || 
              description.trim().length < 5
         ){
                alert("each and every filled must have at least 4 characters");
                return; 
            }

        const product = {
            id: nanoid(),
            image,
            title,
            category,
            price,
            description,
        }
        setproducts([...products, product]);
        localStorage.setItem("products",JSON.stringify([...products, product])
          );
          toast.success("Product added successfully")
        navigate('/')
        
    };
 
  return (
    <form onSubmit={AddProductHandler} className='p-[5%] w-screen h-screen flex flex-col items-center '>
        <h1 className='text-3xl mb-5 font-semibold'>Add New Product</h1>
        <input className='text-1xl bg-zinc-200 rounded p-2 w-1/2 mb-3' type="url" placeholder='Image url'

        onChange={(e) => setimage(e.target.value)}
        value={image}
        
        />
  
         <input className='text-1xl bg-zinc-200 rounded p-2 w-1/2 mb-3' type="text" placeholder='title'

            onChange={(e) => settitle(e.target.value)}
                value={title}

            />
           
           <div className='w-1/2 flex'>
           <input className='text-1xl bg-zinc-200 rounded p-2 w-[49%] mr-3  mb-3' type="text" placeholder='Category'

              onChange={(e) => setcategory(e.target.value)}
              value={category}

          />
        <input className='text-1xl bg-zinc-200 rounded p-2 w-[49%] mb-3' type="number" placeholder='Price'

          onChange={(e) => setprice(e.target.value)}
           value={price}

/>
           </div>

           <textarea 
           className='text-1xl bg-zinc-200 rounded p-2 w-1/2 mb-3' placeholder='Enter product description here'
            rows="8"
           onChange={(e) => setdescription(e.target.value)}
            value={description}
           ></textarea>

        <button className='border-4 font-bold px-5 py-2 hover:text-blue-600 hover:bg-blue-100
 rounded-md border-blue-300 text-blue-300'  > Add  Product 

</button>

    </form>
  )
}


export default Create
