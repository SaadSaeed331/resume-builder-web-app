import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Sidebar from '../Components/Sidebar'
import { createheader } from '../Reduxtoolkit/Reducer'

const Skills = () => {

  const { object } = useSelector((state) => state.main)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [inputvalue, setinputvalue] = useState("")
  const [obj,setobj]= useState([])

  const continuebtn = () => {
    dispatch(createheader({skills: obj}))


    navigate("/summary")
  }

  const savevalue = (e) => {
    setinputvalue(e.target.value)
  }

  const saveskill= ()=>{
    setobj([...obj,inputvalue])
    setinputvalue("")
  }

  console.log(obj);

  return (
    <>
      <div className='grid grid-cols-6'>
        <div className="sidebar col-span-1">
          <Sidebar />
        </div>
        <div className="col-span-5 px-5 py-5  w-full">

          <h1 className='font-semibold text-[2.2vw]'>Add your education</h1>

          <div className="w-[60%] ml-[3vw] grid grid-cols-2">

            <div className="py-5">
              <label className="text-sm font-mono font-bold " htmlFor="skill">ADD SKILLS<br /></label>
              <input value={inputvalue} onChange={savevalue} className='border border-black px-3 py-2 rounded-md' type="text" name="skill" />
              <button onClick={saveskill} className='bg-black text-white px-5 py-2 mx-2 rounded-lg'>ADD</button>
            </div><br />
            <ul className=''>
              {
                obj.map((e) => {
                  return (
                    <>
                      <div className="text">{e}</div>
                    </>
                  )
                })
              }
            </ul>








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

export default Skills