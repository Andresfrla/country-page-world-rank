import Region from './_components/_Region/page'
import Sort from './_components/_Sort/page'
import Status from './_components/_Status/pages'

const SideBar = ({filterData}) => {
  const selectedRegions = [...new Set(filterData.map(region => region.region))];

  return (
    <div className='flex flex-col ml-6 mr-4'>
      <Sort />
      <Region 
        selectedRegions={selectedRegions}
      />
      <Status />
    </div>
  )
}

export default SideBar