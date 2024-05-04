import React from 'react'

const Region = () => {

  return (
    <div className='mt-12'>
        <h3 className='text-[#6C727F] text-sm mb-3'>Region</h3>
        <div className='flex flex-wrap w-64 gap-4'>
            <button className='text-[#D2D5DA] text-base font-bold p-2 pl-3 pr-3 bg-[#282B30] rounded-xl'>Americas</button>
            <button className='text-[#D2D5DA] text-base font-bold p-2 pl-3 pr-3'>Antarctic</button>
            <button className='text-[#D2D5DA] text-base font-bold p-2 pl-3 pr-3'>Africa</button>
            <button className='text-[#D2D5DA] text-base font-bold p-2 pl-3 pr-3'>Asia</button>
            <button className='text-[#D2D5DA] text-base font-bold p-2 pl-3 pr-3'>Europe</button>
            <button className='text-[#D2D5DA] text-base font-bold p-2 pl-3 pr-3'>Oceania</button>
        </div>
    </div>
  )
}

export default Region