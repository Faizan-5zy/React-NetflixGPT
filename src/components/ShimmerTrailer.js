import React from 'react'

const ShimmerTrailer = () => {
  return (
    <div className='w-full  aspect-video bg-red-500 font-bold  relative '>
      <div className='w-full aspect-video  pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='font-bold text-6xl'>Title Loading</h1>
        <p className='text-lg w-1/4 py-6'>Overview Loading</p>
    </div>
    </div>
  )
}

export default ShimmerTrailer