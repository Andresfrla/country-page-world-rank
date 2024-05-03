"use client"
import { getOneCountry } from '@/app/_utils/_GetOneCountry'
import { Typography } from '@mui/material'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const CountryDetail = () => {
  const { country } = useParams()
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchingData = async () => {
      const countriesData = await getOneCountry(country);
      setData(countriesData[0]);
    }
    
    fetchingData();
  }, [])
  
  const countryData = data

  return (
    <div>
      {data.length === 0 ? (
      <Typography>Loading...</Typography>
    ) : (
      <div className="flex min-h-screen flex-col items-center bg-[url('../../public/hero-image-wr.jpg')] bg-[#1B1D1F] bg-contain bg-no-repeat">
        <img src="/Logo.svg" alt="Logo" className="pt-32 w-48 h-auto"/>
        <div className="flex flex-col items-center bg-[#1C1D1F] rounded-2xl w-[720px] h-[945px] mt-28 border-[0.1px] border-[#6C727F]">
          <img src={countryData.flags.png} style={{ width: '260px', height: '185px', objectFit: 'cover' }} className="rounded-xl mt-[-47px]"/>
          <Typography className='pt-9 text-2xl'>
            {countryData.name.common}
          </Typography>
          <Typography className='pt-2 text-xl'>
            {countryData.name.official}
          </Typography>
        </div>
      </div>
    )}    </div>
  )
}

export default CountryDetail;
