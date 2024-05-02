import Region from './_components/_Region/page'
import Sort from './_components/_Sort/page'
import Status from './_components/_Status/pages'

const SideBar = () => {
  return (
    <div className='flex flex-col ml-6 mr-4'>
      <Sort />
      <Region />
      <Status />
    </div>
  )
}

export default SideBar