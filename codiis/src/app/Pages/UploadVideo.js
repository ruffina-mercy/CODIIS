import React from 'react'
import VideoUpload from '../Container/VideoUpload'

const UploadVideo = () => {
  return (
    <div className='p-5 flex flex-col items-center'>
      <div className='flex items-center'>
         <h1 className='mb-5 font-bold'>Video Upload</h1>
         <a href='#/plan' className='bg-green-400 px-3 py-1 border-green-400 cursor-pointer rounded text-white ml-6 mb-4'> Add Plan</a>
      </div>
           <VideoUpload width={400} height={300} /></div>
  )
}

export default UploadVideo