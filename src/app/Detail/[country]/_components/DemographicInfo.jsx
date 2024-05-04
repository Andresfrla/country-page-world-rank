import { formatNumber } from '@/app/_utils/_FormatNumber'
import React from 'react'

const DemographicInfo = ({area, population}) => {
  return (
    <div className='grid grid-cols-2 gap-10 mt-10'>
        <div className='h-12 bg-[#282B30] rounded-xl flex items-center justify-center p-4 pl-4 pr-4'>
            <p className='pr-5 border-r-2 border-[#1B1D1F]'>Population</p>
            <p className='pl-5'>{formatNumber(population)}</p>
        </div>
        <div className='h-12 bg-[#282B30] rounded-xl flex items-center justify-center p-4 pl-4 pr-4'>
            <p className='pr-5 border-r-2 border-[#1B1D1F]'>Area (km²)</p>
            <p className='pl-5'>{formatNumber(area)}</p>
        </div>
    </div>
  )
}

export default DemographicInfo