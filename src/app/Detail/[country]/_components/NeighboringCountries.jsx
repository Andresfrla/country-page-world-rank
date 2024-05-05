import React, { useState, useEffect } from 'react';
import { getOneCountryByCode } from '@/app/_utils/_GetOneCountryByCode';
import Link from 'next/link';

const NeighboringCountries = ({ borders }) => {
    const [flags, setFlags] = useState({});
    const [countryNames, setCountryNames] = useState({});

    if(borders) {
    useEffect(() => {
        const fetchingFlags = async () => {
            const flagsData = {};
            const countryName = {}
            await Promise.all(borders.map(async (countryCode) => {
                const countryInfo = await getOneCountryByCode(countryCode);
                flagsData[countryCode] = countryInfo[0].flags.png;
                countryName[countryCode] = countryInfo[0].name.common;
            }));
            setFlags(flagsData);
            setCountryNames(countryName);
        };

        fetchingFlags();
    }, [borders]);}

    return (
        <div className='flex flex-col w-full justify-start p-5'>
            <h2 className='text-xl font-bold text-[#6C727F] mb-5'>Neighboring Countries</h2>
            <div className='flex flex-row gap-4'>
                {borders ? borders.map((countryCode) => (
                    <div key={countryCode} >
                        <Link href={`/Detail/${countryNames[countryCode]}`}>
                            <img 
                            className='w-20 h-14 rounded-md mb-2'
                            src={flags[countryCode]} style={{ objectFit: 'cover' }} alt={`Flag of ${countryCode}`} />
                            <span className="text-base ml-2">{countryNames[countryCode]}</span>
                        </Link>
                    </div> 
                )) : <h1>No borders</h1>}
            </div>
        </div>
    );
};

export default NeighboringCountries;
