import React, { useState, useEffect } from 'react';
import { getOneCountryByCode } from '@/app/_utils/_GetOneCountryByCode';
import Link from 'next/link';
import { Skeleton } from '@mui/material';
import Image from "next/image"

const NeighboringCountries = ({ borders }) => {
    const [flags, setFlags] = useState({});
    const [countryNames, setCountryNames] = useState({});

    useEffect(() => {
        if (borders) {
            const fetchingFlags = async () => {
                const flagsData = {};
                const countryName = {};
                await Promise.all(borders.map(async (countryCode) => {
                    const countryInfo = await getOneCountryByCode(countryCode);
                    flagsData[countryCode] = countryInfo[0].flags.png;
                    countryName[countryCode] = countryInfo[0].name.common;
                }));
                setFlags(flagsData);
                setCountryNames(countryName);
            };

            fetchingFlags();
        }
    }, [borders]);

    return (
        <div className='flex flex-col w-full justify-start p-5'>
            <h2 className='text-xl font-bold text-[#6C727F] mb-5'>Neighboring Countries</h2>
            <div className='flex flex-row gap-4 overflow-x-auto custom-scrollbar items-start'>
                {borders ? borders.map((countryCode) => (
                    <div key={countryCode} >
                        <Link href={`/Detail/${countryNames[countryCode]}`} className='flex flex-col items-center text-center'>
                            <img 
                            className='max-w-20 max-h-14 rounded-md mb-2 items-center'
                            src={flags[countryCode]} style={{ objectFit: 'cover' }} alt={`Flag of ${countryCode}`} />
                            <span className="text-base">{countryNames[countryCode]}</span>
                        </Link>
                    </div> 
                )) : 
                
                <div className='flex gap-5'>
                    <p className='flex w-28 text-center'>This country Do NOT have Neighboring Countries</p>
                    <div>
                        <Skeleton className='w-20 h-24 mt-[-20px] bg-[#6C727F] rounded-xl'>
                        </Skeleton>
                        <Skeleton className='w-20 h-7 mt-[-10px] bg-[#6C727F] rounded-xl'>
                        </Skeleton>
                    </div>
                    <div>
                        <Skeleton className='w-20 h-24 mt-[-20px] bg-[#6C727F] rounded-xl'>
                        </Skeleton>
                        <Skeleton className='w-20 h-7 mt-[-10px] bg-[#6C727F] rounded-xl'>
                        </Skeleton>
                    </div>
                    <div>
                        <Skeleton className='w-20 h-24 mt-[-20px] bg-[#6C727F] rounded-xl'>
                        </Skeleton>
                        <Skeleton className='w-20 h-7 mt-[-10px] bg-[#6C727F] rounded-xl'>
                        </Skeleton>
                    </div>
                </div>
                    

                }
            </div>
        </div>
    );
};

export default NeighboringCountries;
