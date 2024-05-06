import { useState, useEffect } from 'react';
import Region from './_components/_Region/page'
import Sort from './_components/_Sort/page'
import Status from './_components/_Status/pages'

const SideBar = ({ filterData, sortBy, handleStatus }) => {
  const selectedRegions = [...new Set(filterData.map(region => region.region))];
  const [selectedArgument, setSelectedArgument] = useState('Population')
  const [status, setStatus] = useState({});

  const onStatusChange = (status) => {
    setStatus(status); // Update the status state
    handleStatus(status)
  }
  
  const handleSortChange = (menuItem) => {
    setSelectedArgument(menuItem)
    sortBy(menuItem)
  }

  return (
    <div className='flex flex-col ml-6 mr-4'>
      <Sort 
        selectedSort={handleSortChange}
      />
      <Region 
        selectedRegions={selectedRegions}
      />
      <Status 
        onStatusChange={onStatusChange}
      />
    </div>
  )
}

export default SideBar;