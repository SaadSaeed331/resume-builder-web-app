import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <>
      <div className="bg-[#030335] text-white h-screen px-5 py-4">
        <ul>
          <Link to="/">
            <li className='my-5'>Live Career Resume</li>
          </Link>
          <Link to="/">
            <li className='my-5 border-2 border-white rounded-full px-3 py-2 w-max'>
              <i className="fa-solid fa-user"></i>
            </li>
          </Link>
          <Link to="/experience">
            <li className='my-5 border-2 border-white rounded-full px-3 py-2 w-max'>
              <i className="fa-solid fa-file"></i>
            </li>
          </Link>
          <Link to="/education">
            <li className='my-5 border-2 border-white rounded-full px-3 py-2 w-max'>
              <i className="fa-solid fa-graduation-cap"></i>
            </li>
          </Link>
          <Link to="/skill">
            <li className='my-5 border-2 border-white rounded-full px-3 py-2 w-max'>
              <i className="fa-solid fa-screwdriver-wrench"></i>
            </li>
          </Link>
          <Link to="/summary">
            <li className='my-5 border-2 border-white rounded-full px-3 py-2 w-max'>
              <i className="fa-solid fa-id-card"></i>
            </li>
          </Link>
          <Link to="/final">
            <li className='my-5 border-2 border-white rounded-full px-3 py-2 w-max'>
              <i className="fa-solid fa-file-pen"></i>
            </li>
          </Link>
        </ul>
      </div>
    </>
  )
}

export default Sidebar