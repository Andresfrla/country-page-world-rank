"use client"
import { getOneCountry } from '@/app/_utils/_GetOneCountry'
import { Typography } from '@mui/material'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import CountryHeader from './_components/CountryHeader'
import DemographicInfo from './_components/DemographicInfo'
import OtherInformation from './_components/OtherInformation'
import NeighboringCountries from './_components/NeighboringCountries'
import Link from 'next/link'

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
        <div className="flex min-h-screen flex-col items-center bg-[url('../../public/hero-image-wr.jpg')] bg-[#1B1D1F] bg-contain bg-no-repeat">
          <div aria-label="Loading..." role="status" class="flex items-center space-x-2 mt-40 text-[#D2D5DA]">
    <svg class="h-20 w-20 animate-spin stroke-[#D2D5DA]" viewBox="0 0 256 256">
        <line x1="128" y1="32" x2="128" y2="64" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
        <line x1="195.9" y1="60.1" x2="173.3" y2="82.7" stroke-linecap="round" stroke-linejoin="round"
            stroke-width="24"></line>
        <line x1="224" y1="128" x2="192" y2="128" stroke-linecap="round" stroke-linejoin="round" stroke-width="24">
        </line>
        <line x1="195.9" y1="195.9" x2="173.3" y2="173.3" stroke-linecap="round" stroke-linejoin="round"
            stroke-width="24"></line>
        <line x1="128" y1="224" x2="128" y2="192" stroke-linecap="round" stroke-linejoin="round" stroke-width="24">
        </line>
        <line x1="60.1" y1="195.9" x2="82.7" y2="173.3" stroke-linecap="round" stroke-linejoin="round"
            stroke-width="24"></line>
        <line x1="32" y1="128" x2="64" y2="128" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
        <line x1="60.1" y1="60.1" x2="82.7" y2="82.7" stroke-linecap="round" stroke-linejoin="round" stroke-width="24">
        </line>
    </svg>
    <span class="text-4xl font-medium text-[#D2D5DA]">Loading...</span>
</div>
        </div>
    ) : (
      <div className="flex min-h-screen flex-col items-center bg-[url('../../public/hero-image-wr.jpg')] bg-[#1B1D1F] bg-contain bg-no-repeat">
        <Link href="/">
          <img src="/Logo.svg" alt="Logo" className="pt-32 w-48 h-auto"/>
        </Link>
        <div className="flex flex-col items-center bg-[#1C1D1F] rounded-2xl w-[720px] h-[945px] mt-28 border-[0.1px] border-[#6C727F]">
          <CountryHeader
            commonName={countryData.name.common}
            officialName={countryData.name.official}
            flagSrc={countryData.flags.png}
          />
          <DemographicInfo
            population={countryData.population}
            area={countryData.area}
          />
          <OtherInformation 
            capital={countryData.capital}
            subregion={countryData.subregion}
            language={countryData.languages}
            currencies={countryData.currencies}
            continents={countryData.region}
          />
          <NeighboringCountries
            borders={countryData.borders}
          />
        </div>
      </div>
    )}    
    </div>
  )
}

export default CountryDetail;
