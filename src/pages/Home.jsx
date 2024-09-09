import React from 'react'

function Home() {
  return (
    <div className='px-20 bg-blue-100 h-[90vh]'>
      <div className='pt-24'>
      <h2 className='text-[75px] w-3/4 font-libreaskerville leading-tight font-semibold'>Hire top-tier remote
      Developers</h2>
      <p className='font-semibold w-2/5 mt-4 text-xl'>Hire top 5% elite software engineers
with strong technical and communication
skills in less than 2 weeks.</p>
<div className='border-solid border-2 '>
<input type="text" id="name" name="name" required minlength="4" maxlength="50" size="30" />
<button className='bg-blue-500 text-center px-5 font-semibold text-white'> Hire Now</button>
</div>
</div>
    </div>
  )
}

export default Home
