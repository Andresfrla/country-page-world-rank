import React from 'react'

const Region = ({selectedRegions}) => {

  return (
    <div className='mt-12'>
        <h3 className='text-[#6C727F] text-sm mb-3'>Region</h3>
        <div className='flex flex-wrap w-64 gap-4'>
            <button 
              className={`text-[#D2D5DA] text-base font-bold p-2 pl-3 pr-3 rounded-xl ${
                selectedRegions.includes('Americas') ? 'bg-[#282B30]' : ''
              }`}
            >
              Americas
            </button>
            <button 
              className={`text-[#D2D5DA] text-base font-bold p-2 pl-3 pr-3 rounded-xl ${
                selectedRegions.includes('Antarctic') ? 'bg-[#282B30]' : ''
              }`}
            >
              Antarctic
            </button>
            <button 
              className={`text-[#D2D5DA] text-base font-bold p-2 pl-3 pr-3 rounded-xl ${
                selectedRegions.includes('Africa') ? 'bg-[#282B30]' : ''
              }`}
            >
              Africa
            </button>
            <button 
              className={`text-[#D2D5DA] text-base font-bold p-2 pl-3 pr-3 rounded-xl ${
                selectedRegions.includes('Asia') ? 'bg-[#282B30]' : ''
              }`}
            >
              Asia
            </button>
            <button 
              className={`text-[#D2D5DA] text-base font-bold p-2 pl-3 pr-3 rounded-xl ${
                selectedRegions.includes('Europe') ? 'bg-[#282B30]' : ''
              }`}
            >
              Europe
            </button>
            <button 
              className={`text-[#D2D5DA] text-base font-bold p-2 pl-3 pr-3 rounded-xl ${
                selectedRegions.includes('Oceania') ? 'bg-[#282B30]' : ''
              }`}
            >
              Oceania
            </button>
        </div>
    </div>
  )
}

export default Region