"use client"
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
      <h1>DashBoard</h1>
      {data.map((country) => (
        <li key={country.name.common}>
          {country.name.common}
        </li>
      ))}
    </div>
  );
};

export default DashBoard;
