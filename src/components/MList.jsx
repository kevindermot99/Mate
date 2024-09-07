import React from 'react'

function MList({ list }) {
  return (
    <div className='w-full  bg-stone-100/50 my-3 text-sm py-4 px-5 rounded-lg text-dark-color'>
        {list.map((item, index) => (
            <div key={index} className='Cascadia flex items-center gap-2 pb-1 text-dark-color/70 '> <span className='text-dark-color/30'>{index+1}.</span> {item}</div>
        ))}
    </div>
  )
}

export default MList