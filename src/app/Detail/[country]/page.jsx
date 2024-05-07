"use client"
import { getOneCountry } from '@/app/_utils/_GetOneCountry'
import { Typography } from '@mui/material'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import Image from "next/image"
import CountryHeader from './_components/CountryHeader'
import DemographicInfo from './_components/DemographicInfo'
import OtherInformation from './_components/OtherInformation'
import NeighboringCountries from './_components/NeighboringCountries'
import Link from 'next/link'
import { Loader } from './_components/Loader'

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
        <Loader />
    ) : (
      <div className="flex min-h-screen flex-col items-center bg-[url('../../public/hero-image-wr.jpg')] bg-[#1B1D1F] bg-contain bg-no-repeat">
        <Link href="/">
          <img src="/Logo.svg" alt="Logo" className="pt-32 w-48 h-auto sm:pt-12"/>
        </Link>
        <div className="flex flex-col items-center bg-[#1C1D1F] rounded-2xl xl:w-[720px] xl:h-[945px] sm:w-full mt-28 sm:mt-20 border-[0.1px] border-[#6C727F]">
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
