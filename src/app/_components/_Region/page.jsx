import React from 'react'

const Region = () => {
  return (
    <div className='mt-12'>
        <h3 className='text-[#6C727F] text-sm'>Region</h3>
        <div className='flex flex-wrap w-64 gap-4'>
            <button className='text-[#D2D5DA] text-xl p-2'>Americas</button>
            <button className='text-[#D2D5DA] text-xl p-2'>Antarctic</button>
            <button className='text-[#D2D5DA] text-xl p-2'>Africa</button>
            <button className='text-[#D2D5DA] text-xl p-2'>Asia</button>
            <button className='text-[#D2D5DA] text-xl p-2'>Europe</button>
            <button className='text-[#D2D5DA] text-xl p-2'>Oceania</button>
        </div>
    </div>
  )
}

export default Region