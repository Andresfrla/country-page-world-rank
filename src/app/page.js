"use client"
import { useEffect, useState } from "react";
import DashBoard from "./_components/_Dashboard/page";
import SearchBar from "./_components/_SideBar/_components/_SearchBar/page";
import SideBar from "./_components/_SideBar/page";
import { fetchData } from "./_utils/_GetAllCountries";
import filterData from "./_utils/FilterData";
import sortData from "./_utils/SortData";
import Image from "next/image"

export default function Home() {
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [sortBy, setSortBy] = useState('Population')
  const [appStatus, setAppStatus] = useState({});

  const handleSearchInputChange = (event) => {
    setSearchValue(event.target.value);
  };
  
  const handleSortChange = (menuItem) => {
    setSortBy(menuItem)
  };

  const handleStatus = (status) => {
    setAppStatus(status)
  }

  useEffect(() => {
    const fetchingData = async () => {
      const countriesData = await fetchData();
      setData(countriesData);
    }
    
    fetchingData();
  }, [])
  
  const filteredData = filterData(data, searchValue);

  let secondFilter = [];

  if (appStatus.isUnitedNations === true || appStatus.isIndent === true) {
    secondFilter = filteredData.filter(
      country => (
        country.independent === true || country.unMember === true
      )
    )
  }
  
   const sortedData = (appStatus.isUnitedNations || appStatus.isIndent) ? sortData(secondFilter, sortBy) : sortData(filteredData, sortBy);

  return (
    <main className="flex min-h-screen flex-col items-center bg-[url('../../public/hero-image-wr.jpg')] bg-[#1B1D1F] bg-contain bg-no-repeat">
      <img src="/Logo.svg" alt="Logo" className="xl:pt-32 md:pt-16 sm:pt-14"/>
        <div className="flex flex-col bg-[#1C1D1F] md:rounded-2xl xl:w-[1200px] xl:h-[870px] lg:w-[976px] lg:h-[865px] sm:w-[100%] sm:h-[950px] mt-24 sm:mt-14 sm:border-t border-[0.1px] border-[#6C727F]">
          <SearchBar
            data={data}
            searchValue={searchValue} 
            onSearchInputChange={handleSearchInputChange} 
          />
          <div className="flex mt-12 sm:flex-col md:flex-row">
            <SideBar
              filterData={filteredData}
              sortBy={handleSortChange}
              handleStatus={handleStatus}
            />
            <DashBoard 
              data={sortedData}
            />
          </div>
        </div>
    </main>
  );
}
