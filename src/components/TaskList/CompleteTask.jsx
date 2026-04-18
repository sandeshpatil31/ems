import React from 'react'

const CompleteTask = () => {
  return (
    <div className="flex-shrink-0 w-[320px] p-5 bg-gradient-to-br from-blue-600 to-green-800 rounded-2xl shadow-lg hover:scale-[1.03] transition-all duration-300">
        <div className="flex justify-between">
          <span className="bg-yellow-500/20 text-yellow-300 text-xs px-3 py-1 rounded-full">
            Urgent
          </span>
          <span className="text-xs text-gray-200">15 April 2026</span>
        </div>
        <h2 className="mt-4 text-xl font-semibold text-white">Fix UI Bugs</h2>
        <p className="text-sm text-gray-200 mt-2">
          Improve responsiveness and layout issues.
        </p>

        <div className='mt-2'>
           <button className='w-full'>Complete</button>
        </div>

      </div>
  )
}

export default CompleteTask