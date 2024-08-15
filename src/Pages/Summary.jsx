import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Sidebar from '../Components/Sidebar'
import { createheader } from '../Reduxtoolkit/Reducer'

const Summary = () => {

  const { object } = useSelector((state) => state.main)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [inputvalue, setinputvalue] = useState({})

  const continuebtn = () => {
    dispatch(createheader({summary:inputvalue}))


    navigate("/final")
  }

  const savevalue = (e) => {
    setinputvalue(e.target.value)
  }

  



  return (
    <>
     <div className='grid grid-cols-6'>
        <div className="sidebar col-span-1">
          <Sidebar />
        </div>
        <div className="col-span-5 px-5 py-5  w-full">

          <h1 className='font-semibold text-[2.2vw]'>Add your Summary</h1>

          <div className="w-[60%] ml-[3vw] grid grid-cols-2">

            <div className="py-5 col-span-2">
              <label className="text-sm font-mono font-bold " htmlFor="summary">ADD SUMMARY<br /></label>
              <textarea rows={3} onChange={savevalue} className='border border-black px-3 py-2 rounded-md w-full' type="text" name="summary" ></textarea>
            </div><br />
            


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

export default Summary