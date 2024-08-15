import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Sidebar from '../Components/Sidebar'
import { createheader } from '../Reduxtoolkit/Reducer'


const Education = () => {

  const {object} = useSelector((state)=>state.main)
  const navigate =useNavigate()
  const dispatch = useDispatch()
  const [inputvalue,setinputvalue]= useState({})
  
  
  
  
  const continuebtn = ()=>{
    dispatch(createheader(inputvalue))
   

    navigate("/skill")
  }

  const savevalue=(e)=>{
    setinputvalue({...inputvalue, [e.target.name]:e.target.value})
  }
  console.log(object);

  return (
    <>
    
    <div className='grid grid-cols-6'>
        <div className="sidebar col-span-1">
          <Sidebar />
        </div>
        <div className="col-span-5 px-5 py-5  w-full">
          
          <h1 className='font-semibold text-[2.2vw]'>Add your education</h1>

          <div className="w-[60%] ml-[3vw] grid grid-cols-2">

            <div className="">
              <label className="text-sm font-mono font-bold " htmlFor="schoolname">SCHOOL NAME<br /></label>
              <input onChange={savevalue} className='border border-black px-3 py-2 rounded-md' type="text" name="schoolname" />
            </div>


            <div className="">
              <label className="text-sm font-mono font-bold " htmlFor="schoollocation">SCHOOL LOCATION <br /></label>
              <input onChange={savevalue} className='border border-black px-3 py-2 rounded-md' type="text" name="schoollocation" />
            </div>



            <div className="my-5">
              <label className="text-sm font-mono font-bold " htmlFor="fieldofstudy">FIELD OF STUDY <br /></label>
              <input onChange={savevalue} className='border border-black px-3 py-2 rounded-md' type="text" name="fieldofstudy" />
            </div>



            <div className="my-5">
              <label className="text-sm font-mono font-bold " htmlFor="qualification">QUALIFICATION <br /></label>
              <input onChange={savevalue} className='border border-black px-3 py-2 rounded-md' type="text" name="qualification" />
            </div>

            <div className="my-5">
              <label className="text-sm font-mono font-bold " htmlFor="graduation">GRADUATION YEAR<span className="text-gray-400 text-[0.7vw]">(optional)</span> <br /></label>
              <input onChange={savevalue} className='border border-black px-3 py-2 rounded-md' type="date" name="graduation" />
            </div>


            <div className="col-span-2 flex justify-between">
              <button className='px-[5vw] font-bold py-2 border border-black'>BACK</button>
              <button onClick={continuebtn} className='px-[5vw] font-bold py-2 border border-[rgb(245,102,0)] bg-[rgb(245,102,0)] text-white'>CONTINUE</button>
            </div>

          </div>






        </div>


      </div>
    
    </>
  )
}

export default Education