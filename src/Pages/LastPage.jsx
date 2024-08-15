import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Sidebar from '../Components/Sidebar'
import axios from 'axios'

const LastPage = () => {

  const { object } = useSelector((state) => state.main)
  const navigate = useNavigate()
  const dispatch = useDispatch()


  const saveinfo =async ()=>{
      var res = await axios.post("http://localhost:4000/addcv",object)
      console.log(res);
    }


  console.log(object, "object");
  return (
    <>
      <div className='grid grid-cols-6'>
        <div className="sidebar col-span-1">
          <Sidebar />
        </div>
        <div className="col-span-5 px-5  py-5  w-full">

          <div className="text-3xl">OverView Resume</div>

          <div className="bg-blue-100 p-10 w-[80%] h-max grid grid-cols-4">
            <div className="col-span-1">
              <div className="w-full">
                <img src={object.profile} alt="" />
              </div>
              <div className="border-t-2 border-blue-500  mt-5 mb-2"></div>
              <div className="font-bold text-xl">Contact</div>
              <div className="">{object.city},{object.country},{object.postalcode}</div>
              <div className="">{object.email}</div>
              <div className="">{object.phone}</div>
              <div className="border-t-2 border-blue-500  mt-5 mb-2"></div>
              <div className="font-bold text-xl">Skills</div>
              <div className="">{object.skills.map((e)=>{
                  return(
                    <>
                    <div>{e}</div>
                    </>
                  )
              })}</div>



            </div>
                {/* CV right side */}
            <div className="col-span-3 pl-[8vw]">
              <div className="text-2xl font-bold">{object?.firstname} {object?.lastname}</div>
              <div className="">{object?.summary}</div>
              <div className="border-t-2 border-blue-500  mt-5 mb-2"></div>
              <div className="font-bold text-xl">Exprience</div>
              <div className="font-bold">{object?.jobtitle}</div>
              <span className=""><span className='font-bold'>{object?.employer}</span> <br /> {object?.city},{object?.country}</span><br />
              <span className="">{object?.startdate}-- to --{object?.enddate}</span>
              <div className="">{object?.desc}</div>

              <div className="border-t-2 border-blue-500  mt-5 mb-2"></div>
              <div className="font-bold text-xl">Education</div>
              <div className="">{object?.graduationyear}</div>
              <div className="font-bold">{object?.fieldofstudy}</div>
              <div className=""> <span className='font-bold'>{object?.schoolname}</span> --{object?.schoollocation}</div>

            </div>
            {/* save button */}



          </div>

            <button onClick={saveinfo} className='px-5 py-1 border bg-green-700 text-white rounded-md m-2'>Save Info</button>





        </div>






      </div>




    </>
  )
}

export default LastPage