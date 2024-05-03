"use client"
import { formatNumber } from "@/app/_utils/_FormatNumber";
import { fetchData } from "@/app/_utils/_UseApiData.js";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
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
    <TableContainer style={{ maxHeight: 'calc(100vh - 250px)', overflowY: 'auto' }}>
      <Table className="w-full flex flex-col" stickyHeader aria-label="sticky table">
        <TableHead className="mb-5" style={{ position: 'sticky', top: '0', zIndex: '999', background: '#fff' }}>
          <TableRow className="flex space-x-12 text-sm text-[#6C727F]">
            <TableCell className="w-[50px] text-left">Flag</TableCell>
            <TableCell className="w-40 text-left">Name</TableCell>
            <TableCell className="w-36 text-left">Population</TableCell>
            <TableCell className="w-40 text-left">Area (km²)</TableCell>
            <TableCell className="w-36 text-left">Region</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* <hr className="border-[#6C727F]"/> */}
          {data.map((country) => (
            <TableRow  key={country.name.common} className="flex space-x-12 items-center justify-center mt-4 font-medium text-[#D2D5DA] text-base">
              <TableCell className="w-[50px]"> 
                <img src={country.flags.png} style={{ width: '50px', height: '38px', objectFit: 'cover' }} className="rounded"/>
              </TableCell>
              <TableCell className="w-40">
                <Typography>{country.name.common}</Typography>
              </TableCell>
              <TableCell className="w-36">
                <Typography className="w-[472p36">{formatNumber(country.population)}</Typography>
              </TableCell>
              <TableCell className="w-40">
                <Typography>{formatNumber(country.area)}</Typography>
              </TableCell>
              <TableCell className="w-36">
                <Typography>{country.region}</Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DashBoard;
