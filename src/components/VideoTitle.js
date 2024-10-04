import React from 'react'

const VideoTitle = ({title , overview}) => {

    return (
    <div className='max-w-full aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='font-bold text-6xl '>{title}</h1>
        <p className='text-lg w-1/4 py-6'>{overview}</p>
        <div className='flex justify-around w-3/12'>
       <button className="font-bold w-1/2 p-2 m-2 bg-white  text-black rounded  hover:bg-opacity-70 z-10 " >
               {/* ▶ Play */}
               Play
        </button>
        <button className="font-bold w-1/2 p-2 m-2 bg-gray-700 text-white rounded  hover:bg-opacity-70 z-10" >
               {/* ℹ More Info */}
               More Info
        </button>
        </div>
    </div>
  )
}

export default VideoTitle