import React from 'react'

function Header() {
  return (
    <div className='bg-blue-100 px-20 py-4 flex justify-between items-center'>
     <div>
        <h1 className='text-blue-500 font-bold md:text-4xl'>SUPERCODER</h1>
     </div>
     <div className='space-x-4'>
        <button className='border-solid border-2 border-blue-500 font-semibold text-blue-500 py-2 px-4 rounded-full'>Apply for Jobs</button>
        <button className='bg-blue-500 py-2 px-4 rounded-full border-solid border-2 border-blue-500 text-white font-semibold'>Hire Developer</button>
     </div>
    </div>
  )
}

export default Header
