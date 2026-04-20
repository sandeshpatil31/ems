import React from 'react'

const FailedTask = ({data}) => {
  return (
    
    <div className="flex-shrink-0 w-[320px] p-5 bg-gradient-to-br from-blue-600 to-red-400 rounded-2xl shadow-lg hover:scale-[1.03] transition-all duration-300">
        <div className="flex justify-between">
          <span className="bg-yellow-500/20 text-yellow-300 text-xs px-3 py-1 rounded-full">
           {data.category}
          </span>
          <span className="text-xs text-gray-200">{data.date}</span>
        </div>
        <h2 className="mt-4 text-xl font-semibold text-white">{data.taskTitle}</h2>
        <p className="text-sm text-gray-200 mt-2">
          {data.description}
        </p>

        <div className='mt-2'>
           <button className='w-full'>Failed</button>
        </div>

      </div>

  )
}

export default FailedTask