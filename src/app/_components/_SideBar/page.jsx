import { useState } from 'react';
import Region from './_components/_Region/page'
import Sort from './_components/_Sort/page'
import Status from './_components/_Status/pages'

const SideBar = ({filterData, selectedSortBy}) => {
  const selectedRegions = [...new Set(filterData.map(region => region.region))];
  const [selectedSort, setSelectedSort] = useState('Population')

  const handleSortChange = (menuItem) => {
    setSelectedSort(menuItem)
  }

  return (
    <div className='flex flex-col ml-6 mr-4'>
      <Sort 
        selectedSort={handleSortChange}
      />
      <Region 
        selectedRegions={selectedRegions}
      />
      <Status />
    </div>
  )
}

export default SideBar