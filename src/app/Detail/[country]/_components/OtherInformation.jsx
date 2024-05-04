import React from 'react'

const OtherInformation = ({capital, subregion, language, currencies, continents}) => {
  const languageKeys = Object.keys(language)
  const currenciesKeys = Object.keys(currencies)
  
    return (
    <div className='flex flex-col w-full mt-10'>
        <div className='flex justify-between p-5 border-t border-[#6C727F]'>
            <p className='text-xl font-bold text-[#6C727F]'>Capital</p>
            <p>{capital}</p>
        </div>
        <div className='flex justify-between p-5 border-t border-[#6C727F]'>
            <p className='text-xl font-bold text-[#6C727F]'>Subregion</p>
            <p>{subregion}</p>
        </div>
        <div className='flex justify-between p-5 border-t border-[#6C727F]'>
            <p className='text-xl font-bold text-[#6C727F]'>Language</p>
            <p>{languageKeys.map((key) => language[key]).join(', ')}</p>
        </div>
        <div className='flex justify-between p-5 border-t border-[#6C727F]'>
            <p className='text-xl font-bold text-[#6C727F]'>Currencies</p>
            <p>{currenciesKeys.map((key) => currencies[key].name).join(', ')}</p>
        </div>
        <div className='flex justify-between p-5 border-t border-b border-[#6C727F]'>
            <p className='text-xl font-bold text-[#6C727F]'>Continents</p>
            <p>{continents}</p>
        </div>
    </div>
  )
}

export default OtherInformation