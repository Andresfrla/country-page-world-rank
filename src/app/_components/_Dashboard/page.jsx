"use client"
import { formatNumber } from "@/app/_utils/_FormatNumber";
import { fetchData } from "@/app/_utils/_UseApiData.js";
import { useEffect, useState } from "react";


const DashBoard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchingData = async () => {
      const countriesData = await fetchData();
      setData(countriesData);
    }
    
    fetchingData();
  }, [])
  

  return (
    <div>
      <table className="w-full flex flex-col">
        <thead className="mb-5">
          <tr className="flex space-x-12 text-sm text-[#6C727F]">
            <th className="w-[50px] text-left">Flag</th>
            <th className="w-40 text-left">Name</th>
            <th className="w-36 text-left">Population</th>
            <th className="w-40 text-left">Area (km²)</th>
            <th className="w-36 text-left">Region</th>
          </tr>
        </thead>
        <tbody>
          <hr className="border-[#6C727F]"/>
          {data.map((country) => (
            <tr key={country.name.common} className="flex space-x-12 items-center justify-center mt-4 font-medium text-[#D2D5DA] text-base">
              <td className="w-[50px]"> 
                <img src={country.flags.png} style={{ width: '50px', height: '38px', objectFit: 'cover' }} className="rounded"/>
              </td>
              <td className="w-40">
                <p>{country.name.common}</p>
              </td>
              <td className="w-36">
                <p className="w-[472p36">{formatNumber(country.population)}</p>
              </td>
              <td className="w-40">
                <p>{formatNumber(country.area)}</p>
              </td>
              <td className="w-36">
                <p>{country.region}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DashBoard;
