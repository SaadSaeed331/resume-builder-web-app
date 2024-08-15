import React, { useState } from 'react'
import Sidebar from '../Components/Sidebar'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { createheader } from '../Reduxtoolkit/Reducer'
import axios from 'axios'


const HeaderPage1 = () => {
    const {object} = useSelector((state)=>state.main)
    const navigate =useNavigate()
    const dispatch = useDispatch()
    const [inputvalue,setinputvalue]= useState({})
    const [image,setimage] = useState()


    const savevalue=(e)=>{
      setinputvalue({...inputvalue, [e.target.name]:e.target.value})
      
    }

    const continuebtn = ()=>{
      dispatch(createheader(inputvalue))

      navigate("/experience")
    }
    
    const upload= async(e)=>{
      var file = e.target.files[0]
      var formData = new FormData()
      formData.append("file",file)
      formData.append("upload_preset", "ml_default")
      var res = await axios.post("https://api.cloudinary.com/v1_1/dejkzudwt/image/upload", formData)
        setimage(res.data.secure_url)
       setinputvalue({...inputvalue, [e.target.name]:res.data.secure_url})
    }
    
    console.log(image);
    
    console.log(object, "reducer object");
    
  return (
    <>
      <div className='grid grid-cols-6'>
        <div className="sidebar col-span-1">
          <Sidebar />
        </div>
        <div className="col-span-5 px-5 py-5  w-full">
          
          <h1 className='font-semibold text-[2.2vw]'>How do you want recruiters to contact you?</h1>

          <div className="flex ml-[2rem] mt-[1.5rem]">

            <div className="pic-parent mt-3">
              <div className="bg-gray-300  w-[70%] h-[33vh]">
                <img className='w-full h-full' src={image} alt="" />
              </div>
              <input onChange={upload} name='profile' type="file" className='border border-black px-3 py-1 rounded-md mt-2 w-[70%]' />
            </div>
            <div className="">
              <h1>Include your full name and at least email or phone number</h1>
              <div className="block my-5">

                <label className="text-sm font-mono font-bold " htmlFor="firstname">First Name <br /></label>
                <input onChange={savevalue} className='border border-black px-3 py-1 rounded-md' type="text" name="firstname" />
              </div>
              <div className="my-5">
                <label className="text-sm font-mono font-bold " htmlFor="lastname">Last Name <br /></label>
                <input onChange={savevalue} className='border border-black px-3 py-1 rounded-md' type="text" name="lastname" />
              </div>
              <div className="my-5">
                <label className="text-sm font-mono font-bold " htmlFor="city">City-State <br /></label>
                <input onChange={savevalue} className='border border-black px-3 py-1 rounded-md w-[25rem]' type="text" name="city" />
              </div>

            </div>
          </div>

          <div className="w-[60%] ml-[3vw] grid grid-cols-2">

            <div className="">
              <label className="text-sm font-mono font-bold " htmlFor="postalcode">Postal code <br /></label>
              <input onChange={savevalue} className='border border-black px-3 py-1 rounded-md' type="number" name="postalcode" />
            </div>


            <div className="">
              <label className="text-sm font-mono font-bold " htmlFor="country">Country <br /></label>
              <input onChange={savevalue} className='border border-black px-3 py-1 rounded-md' type="text" name="country" />
            </div>



            <div className="my-5">
              <label className="text-sm font-mono font-bold " htmlFor="phone">Phone <br /></label>
              <input onChange={savevalue} className='border border-black px-3 py-1 rounded-md' type="number" name="phone" />
            </div>



            <div className="my-5">
              <label className="text-sm font-mono font-bold " htmlFor="email">Email <br /></label>
              <input onChange={savevalue} className='border border-black px-3 py-1 rounded-md' type="email" name="email" />
            </div>

            <div className="col-span-2 flex justify-between">
              <button className='px-[5vw] font-bold py-1 border border-black'>BACK</button>
              <button onClick={continuebtn} className='px-[5vw] font-bold py-1 border border-[rgb(245,102,0)] bg-[rgb(245,102,0)] text-white'>CONTINUE</button>
            </div>

          </div>






        </div>


      </div>

    </>
  )
}

export default HeaderPage1