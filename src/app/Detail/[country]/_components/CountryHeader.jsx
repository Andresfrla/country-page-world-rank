import { Typography } from '@mui/material'
import React from 'react'
import { Be_Vietnam_Pro } from 'next/font/google';
import Image from "next/image"

const BeVietnamPro = Be_Vietnam_Pro({
    subsets: ["latin"],
    weight: "500"
  })

const CountryHeader = ({ commonName, officialName, flagSrc }) => {
  return (
    <div className='flex flex-col items-center'>
        <img src={flagSrc} style={{ width: '260px', height: '185px', objectFit: 'cover' }} className="rounded-xl mt-[-47px]"/>
          <Typography className={`${BeVietnamPro.className} pt-9 text-2xl`}>
            {commonName}
          </Typography>
          <Typography 
          style={{ fontWeight: 100 }}
          className={`${BeVietnamPro.className} pt-2 text-xl`}>
            {officialName}
          </Typography>
    </div>
  )
}

export default CountryHeader