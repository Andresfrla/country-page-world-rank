import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import Link from "next/link";
import { useEffect, useState } from "react";
import { formatNumber } from "@/app/_utils/_FormatNumber";
import { Be_Vietnam_Pro } from 'next/font/google';
import { Loader } from "./_components/Loader";
import Image from "next/image"

const BeVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: "500"
});

const sortingFunctions = {
  Population: (a, b) => b.population - a.population,
  Name: (a, b) => a.name.common.localeCompare(b.name.common),
  "Area (km²)": (a, b) => b.area - a.area,
  Region: (a, b) => a.region.localeCompare(b.region)
};

const DashBoard = ({ data, selectedSortBy }) => {
  const [sortedData, setSortedData] = useState(data);

  useEffect(() => {
    const sortData = () => {
      const sorted = [...data].sort(sortingFunctions[selectedSortBy]);
      return sorted;
    };

    setSortedData(sortData());
  }, [data, selectedSortBy]);

  return (
    <div>
      {
        data.length === 0 ? 
        (
          <Loader />  
        )
        : 
        <TableContainer
        style={{
          maxHeight: 'calc(100vh - 250px)',
          overflow: 'auto'
        }}
        className="custom-scrollbar"
      >
        <Table className="w-full flex flex-col pl-5" stickyHeader aria-label="simple table">
          <TableHead style={{ position: 'sticky', top: '0', zIndex: '999', background: '#1C1D1F' }}>
            <TableRow className="flex space-x-12 text-sm text-[#6C727F] border-b-2 border-[#6C727F]">
              <TableCell className={`w-[50px] text-left text-sm text-[#6C727F] bg-transparent border-none pl-0 ${BeVietnamPro}`}>
                <Typography className={`${BeVietnamPro.className}`}>Flag</Typography>
              </TableCell>
              <TableCell className="w-36 text-left text-sm text-[#6C727F] bg-transparent border-none pl-0">
                <Typography className={`${BeVietnamPro.className}`}>Name</Typography>
              </TableCell>
              <TableCell className="w-36 text-left text-sm text-[#6C727F] bg-transparent border-none pl-0">
               <Typography className={`${BeVietnamPro.className}`}>Population</Typography>
              </TableCell>
              <TableCell className="w-36 text-left text-sm text-[#6C727F] bg-transparent border-none pl-0">
               <Typography className={`${BeVietnamPro.className}`}>Area (km²)</Typography>
              </TableCell>
              <TableCell className="w-36 text-left text-sm text-[#6C727F] bg-transparent border-none pl-0 sm:hidden xl:block">
                <Typography className={`${BeVietnamPro.className}`}>
                  Region
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedData.map((country) => (
              <TableRow key={country.name.common} className="flex space-x-12 items-center justify-center mt-4 font-medium text-[#D2D5DA] text-base">
                <TableCell className="w-[50px] font-medium text-[#D2D5DA] text-base border-none p-0">
                  <Link href={`/Detail/${country.name.common}`}>
                    <img src={country.flags.png} style={{ width: '50px', height: '38px', objectFit: 'cover' }} className="rounded" />
                  </Link>
                </TableCell>
                <TableCell className="w-36 font-medium text-[#D2D5DA] text-base border-none">
                  <Link href={`/Detail/${country.name.common}`}>
                    <Typography className={`${BeVietnamPro.className}`}>{country.name.common}</Typography>
                  </Link>
                </TableCell>
                <TableCell className="w-36 text-[#D2D5DA] text-base border-none">
                  <Link href={`/Detail/${country.name.common}`}>
                    <Typography className={`${BeVietnamPro.className}`}>{formatNumber(country.population)}</Typography>
                  </Link>
                </TableCell>
                <TableCell className="w-36 text-[#D2D5DA] text-base border-none">
                  <Link href={`/Detail/${country.name.common}`}>
                    <Typography className={`${BeVietnamPro.className}`}>{formatNumber(country.area)}</Typography>
                  </Link>
                </TableCell>
                <TableCell className="w-36 text-[#D2D5DA] text-base border-none sm:hidden xl:block">
                  <Link href={`/Detail/${country.name.common}`}>
                    <Typography className={`${BeVietnamPro.className}`}>{country.region}</Typography>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      }
      
    </div>
  );
};

export default DashBoard;