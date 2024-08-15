import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Sidebar from '../Components/Sidebar'
import { createheader } from '../Reduxtoolkit/Reducer'

const Experience = () => {
  const {object} = useSelector((state)=>state.main)
  const navigate =useNavigate()
  const dispatch = useDispatch()
  const [inputvalue,setinputvalue]= useState({})
  
  
  
  
  const continuebtn = ()=>{
    dispatch(createheader(inputvalue))
   

    navigate("/education")
  }

  const savevalue=(e)=>{
    setinputvalue({...inputvalue, [e.target.name]:e.target.value})
  }
  console.log(object, 'object');

  return (
    <>
      <div className='grid grid-cols-6'>
        <div className="sidebar col-span-1">
          <Sidebar />
        </div>
        <div className="col-span-5 px-5 py-5  w-full">
          
          <h1 className='font-semibold text-[2.2vw]'>Update your experience</h1>

          <div className="w-[60%] ml-[3vw] grid grid-cols-2">

            <div className="">
              <label className="text-sm font-mono font-bold " htmlFor="jobtitle">JOB TITLE<br /></label>
              <input onChange={savevalue} className='border border-black px-3 py-2 rounded-md' type="text" name="jobtitle" />
            </div>


            <div className="">
              <label className="text-sm font-mono font-bold " htmlFor="employer">EMPLOYER <br /></label>
              <input onChange={savevalue} className='border border-black px-3 py-2 rounded-md' type="text" name="employer" />
            </div>



            <div className="my-5">
              <label className="text-sm font-mono font-bold " htmlFor="startdate">START DATE <br /></label>
              <input onChange={savevalue} className='border border-black px-3 py-2 rounded-md' type="date" name="startdate" />
            </div>



            <div className="my-5">
              <label className="text-sm font-mono font-bold " htmlFor="enddate">END DATE <br /></label>
              <input onChange={savevalue} className='border border-black px-3 py-2 rounded-md' type="date" name="enddate" />
            </div>

            <div className="my-5">
              <label className="text-sm font-mono font-bold " htmlFor="city">CITY-STATE<span className="text-gray-400 text-[0.7vw]">(optional)</span> <br /></label>
              <input onChange={savevalue} className='border border-black px-3 py-2 rounded-md' type="text" name="city" />
            </div>


            <div className="my-5">
              <label className="text-sm font-mono font-bold " htmlFor="country">COUNTRY<span className="text-gray-400 text-[0.7vw]">(optional)</span> <br /></label>
              <input onChange={savevalue} className='border border-black px-3 py-2 rounded-md' type="text" name="country" />
            </div>

            <div className="my-5 col-span-2">
              <label className="text-sm font-mono font-bold " htmlFor="desc">Description<span className="text-gray-400 text-[0.7vw]">(optional)</span> <br /></label>
              <textarea rows={3} onChange={savevalue} className='border border-black px-3 py-2 rounded-md w-full' type="text" name="desc" ></textarea>
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

export default Experience