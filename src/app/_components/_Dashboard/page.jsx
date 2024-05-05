import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import Link from "next/link";
import { useEffect, useState } from "react";
import { formatNumber } from "@/app/_utils/_FormatNumber";
import { Be_Vietnam_Pro } from 'next/font/google';

const BeVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: "500"
});

const DashBoard = ({ data, selectedSortBy }) => {
  const [sort, setSort] = useState('');
  const [sortedData, setSortedData] = useState(data);

  useEffect(() => {
    const sortData = () => {
      switch (sort) {
        case 'Population':
          return [...data].sort((a, b) => b.population - a.population);
        case 'Name':
          return [...data].sort((a, b) => a.name.common.localeCompare(b.name.common));
        case 'Area (km²)':
          return [...data].sort((a, b) => b.area - a.area);
        case 'Region':
          return [...data].sort((a, b) => a.region.localeCompare(b.region));
        default:
          return data;
      }
    };

    const sorted = sortData();
    setSortedData(sorted);
  }, [data, sort, selectedSortBy]);

  return (
    <div>
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
              <TableCell className="w-[50px] text-left text-sm text-[#6C727F] bg-transparent border-none pl-0">Flag</TableCell>
              <TableCell className="w-40 text-left text-sm text-[#6C727F] bg-transparent border-none pl-0">
                <button>Name</button>
              </TableCell>
              <TableCell className="w-36 text-left text-sm text-[#6C727F] bg-transparent border-none pl-0">
                <button>Population</button>
              </TableCell>
              <TableCell className="w-40 text-left text-sm text-[#6C727F] bg-transparent border-none pl-0">
                <button>Area (km²)</button>
              </TableCell>
              <TableCell className="w-36 text-left text-sm text-[#6C727F] bg-transparent border-none pl-0">
                <button >Region</button>
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
                <TableCell className="w-40 font-medium text-[#D2D5DA] text-base border-none">
                  <Link href={`/Detail/${country.name.common}`}>
                    <Typography className={`${BeVietnamPro.className}`}>{country.name.common}</Typography>
                  </Link>
                </TableCell>
                <TableCell className="w-36 text-[#D2D5DA] text-base border-none">
                  <Link href={`/Detail/${country.name.common}`}>
                    <Typography className={`${BeVietnamPro.className}`}>{formatNumber(country.population)}</Typography>
                  </Link>
                </TableCell>
                <TableCell className="w-40 text-[#D2D5DA] text-base border-none">
                  <Link href={`/Detail/${country.name.common}`}>
                    <Typography className={`${BeVietnamPro.className}`}>{formatNumber(country.area)}</Typography>
                  </Link>
                </TableCell>
                <TableCell className="w-36 text-[#D2D5DA] text-base border-none">
                  <Link href={`/Detail/${country.name.common}`}>
                    <Typography className={`${BeVietnamPro.className}`}>{country.region}</Typography>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default DashBoard;