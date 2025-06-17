import React from 'react'

function Skeleton() {
  return (
    <div>
        <div className='my-1 w-[49%] md:w-[32%] lg:w-[31.5%] animate-pulse'>
      {/* Image placeholder */}
      <div className='w-full h-[270px] bg-gray-300 rounded-xl relative overflow-hidden'>
        <div className='w-10 h-10 bg-gray-400 rounded-full absolute end-1 top-1' />
      </div>

      {/* Content placeholder */}
      <div className='flex justify-between py-2'>
        <div className='w-[70%]'>
          <div className='h-5 bg-gray-300 rounded w-1/2 mb-2' />
          <div className='h-3 bg-gray-300 rounded w-full mb-2' />
          <div className='flex space-x-1 mb-2'>
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className='w-4 h-4 bg-gray-300 rounded' />
            ))}
            <div className='w-10 h-3 bg-gray-300 rounded' />
          </div>
          <div className='w-24 h-8 bg-gray-300 rounded-xl' />
        </div>

        <div className='w-[25%] flex items-start justify-end'>
          <div className='h-6 w-16 bg-gray-300 rounded' />
        </div>
      </div>
    </div>
    </div>
  )
}

export default Skeleton